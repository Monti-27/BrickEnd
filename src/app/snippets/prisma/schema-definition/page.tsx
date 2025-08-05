"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/ui/code-block"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Plus,
  Trash2,
  Edit,
  Database,
  Code2, 
  FileText,
  CheckCircle,
  Info,
  Settings,
  Link,
  Hash,
  Calendar,
  Type,
  AlertCircle,
  HelpCircle,
  User,
  ShoppingCart,
  Users,
  CheckSquare
} from "lucide-react"
import { useState } from "react"

interface Model {
  id: string
  name: string
  fields: Field[]
  indexes: Index[]
}

interface Field {
  id: string
  name: string
  type: string
  isRequired: boolean
  isUnique: boolean
  isId: boolean
  defaultValue?: string
  relation?: {
    model: string
    type: 'one-to-one' | 'one-to-many' | 'many-to-one' | 'many-to-many'
    onDelete?: 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
    onUpdate?: 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
  }
  dbType?: string
  mapName?: string
  constraints?: {
    primaryKey?: boolean
    foreignKey?: {
      references: string
      onDelete?: 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
      onUpdate?: 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
    }
    unique?: boolean
    notNull?: boolean
    check?: string
    default?: string
  }
}

interface Index {
  id: string
  fields: string[]
  name?: string
  isUnique: boolean
}

interface Enum {
  id: string
  name: string
  values: string[]
}

export default function PrismaSchemaDesignerPage() {
  const [models, setModels] = useState<Model[]>([
    {
      id: '1',
      name: 'User',
      fields: [
        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
        { id: '2', name: 'email', type: 'String', isRequired: true, isUnique: true, isId: false },
        { id: '3', name: 'name', type: 'String', isRequired: false, isUnique: false, isId: false },
        { id: '4', name: 'role', type: 'UserRole', isRequired: true, isUnique: false, isId: false, defaultValue: 'USER' },
        { id: '5', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
        { id: '6', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
      ],
      indexes: [
        { id: '1', fields: ['email'], isUnique: false },
        { id: '2', fields: ['createdAt'], isUnique: false }
      ]
    },
    {
      id: '2',
      name: 'Post',
      fields: [
        { id: '7', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
        { id: '8', name: 'title', type: 'String', isRequired: true, isUnique: false, isId: false },
        { id: '9', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false, dbType: 'Text' },
        { id: '10', name: 'published', type: 'Boolean', isRequired: true, isUnique: false, isId: false, defaultValue: 'false' },
        { id: '11', name: 'authorId', type: 'String', isRequired: true, isUnique: false, isId: false },
        { id: '12', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
        { id: '13', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
      ],
      indexes: [
        { id: '3', fields: ['authorId'], isUnique: false },
        { id: '4', fields: ['published', 'createdAt'], isUnique: false }
      ]
    }
  ])

  const [enums, setEnums] = useState<Enum[]>([
    {
      id: '1',
      name: 'UserRole',
      values: ['USER', 'ADMIN', 'MODERATOR']
    },
    {
      id: '2',
      name: 'PostStatus',
      values: ['DRAFT', 'PUBLISHED', 'ARCHIVED']
    }
  ])

  const fieldTypes = [
    { value: 'String', label: 'String', description: 'Text data' },
    { value: 'Int', label: 'Int', description: '32-bit integer' },
    { value: 'BigInt', label: 'BigInt', description: '64-bit integer' },
    { value: 'Float', label: 'Float', description: 'Decimal number' },
    { value: 'Decimal', label: 'Decimal', description: 'Precise decimal' },
    { value: 'Boolean', label: 'Boolean', description: 'True/false value' },
    { value: 'DateTime', label: 'DateTime', description: 'Date and time' },
    { value: 'Json', label: 'Json', description: 'JSON data' },
    { value: 'Bytes', label: 'Bytes', description: 'Binary data' }
  ]

  const generateSchemaCode = () => {
    let code = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

`

    // Generate enums
    enums.forEach(enumDef => {
      code += `enum ${enumDef.name} {\n`
      enumDef.values.forEach(value => {
        code += `  ${value}\n`
      })
      code += '}\n\n'
    })

    // Generate models
    models.forEach(model => {
      code += `model ${model.name} {\n`
      model.fields.forEach(field => {
        let fieldLine = `  ${field.name}  ${field.type}`
        
        // Handle constraints
        if (field.isId || field.constraints?.primaryKey) fieldLine += ` @id`
        if (field.isUnique || field.constraints?.unique) fieldLine += ` @unique`
        if (field.isRequired === false && !field.constraints?.notNull) fieldLine += `?`
        if (field.defaultValue || field.constraints?.default) {
          const defaultValue = field.constraints?.default || field.defaultValue
          fieldLine += ` @default(${defaultValue})`
        }
        if (field.dbType && field.dbType !== 'auto') fieldLine += ` @db.${field.dbType}`
        if (field.mapName) fieldLine += ` @map("${field.mapName}")`
        
        // Handle foreign key constraints
        if (field.constraints?.foreignKey) {
          const fk = field.constraints.foreignKey
          fieldLine += ` @relation(fields: [${field.name}], references: [${fk.references}]`
          if (fk.onDelete) fieldLine += `, onDelete: ${fk.onDelete}`
          if (fk.onUpdate) fieldLine += `, onUpdate: ${fk.onUpdate}`
          fieldLine += ')'
        } else if (field.relation) {
          fieldLine += ` @relation(fields: [${field.name}], references: [id]`
          if (field.relation.onDelete) fieldLine += `, onDelete: ${field.relation.onDelete}`
          if (field.relation.onUpdate) fieldLine += `, onUpdate: ${field.relation.onUpdate}`
          fieldLine += ')'
        }
        
        // Handle check constraints
        if (field.constraints?.check) {
          fieldLine += ` @db.Check("${field.constraints.check}")`
        }
        
        code += fieldLine + '\n'
      })

      // Generate indexes
      model.indexes.forEach(index => {
        if (index.isUnique) {
          code += `  @@unique([${index.fields.join(', ')}]${index.name ? `, name: "${index.name}"` : ''})\n`
        } else {
          code += `  @@index([${index.fields.join(', ')}]${index.name ? `, name: "${index.name}"` : ''})\n`
        }
      })
      
      code += '}\n\n'
    })

    return code
  }

  const addModel = () => {
    const newModel: Model = {
      id: Date.now().toString(),
      name: `Model${models.length + 1}`,
      fields: [
        { id: Date.now().toString(), name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' }
      ],
      indexes: []
    }
    setModels([...models, newModel])
  }

  const removeModel = (modelId: string) => {
    setModels(models.filter(model => model.id !== modelId))
  }

  const addField = (modelId: string) => {
    setModels(models.map(model => {
      if (model.id === modelId) {
        const newField: Field = {
          id: Date.now().toString(),
          name: 'field',
          type: 'String',
          isRequired: true,
          isUnique: false,
          isId: false
        }
        return { ...model, fields: [...model.fields, newField] }
      }
      return model
    }))
  }

  const removeField = (modelId: string, fieldId: string) => {
    setModels(models.map(model => {
      if (model.id === modelId) {
        return { ...model, fields: model.fields.filter(field => field.id !== fieldId) }
      }
      return model
    }))
  }

  const updateField = (modelId: string, fieldId: string, updates: Partial<Field>) => {
    setModels(models.map(model => {
      if (model.id === modelId) {
        return {
          ...model,
          fields: model.fields.map(field => 
            field.id === fieldId ? { ...field, ...updates } : field
          )
        }
      }
      return model
    }))
  }

  const updateModelName = (modelId: string, name: string) => {
    setModels(models.map(model => 
      model.id === modelId ? { ...model, name } : model
    ))
  }

  const addEnum = () => {
    const newEnum: Enum = {
      id: Date.now().toString(),
      name: `Enum${enums.length + 1}`,
      values: ['VALUE1', 'VALUE2']
    }
    setEnums([...enums, newEnum])
  }

  const removeEnum = (enumId: string) => {
    setEnums(enums.filter(enumDef => enumDef.id !== enumId))
  }

  const updateEnum = (enumId: string, updates: Partial<Enum>) => {
    setEnums(enums.map(enumDef => 
      enumDef.id === enumId ? { ...enumDef, ...updates } : enumDef
    ))
  }

  const addIndex = (modelId: string) => {
    setModels(models.map(model => {
      if (model.id === modelId) {
        const newIndex: Index = {
          id: Date.now().toString(),
          fields: [],
          isUnique: false
        }
        return { ...model, indexes: [...model.indexes, newIndex] }
      }
      return model
    }))
  }

  const removeIndex = (modelId: string, indexId: string) => {
    setModels(models.map(model => {
      if (model.id === modelId) {
        return { ...model, indexes: model.indexes.filter(index => index.id !== indexId) }
      }
      return model
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Prisma Schema Designer</h1>
        </div>
        <p className="text-muted-foreground">
          Design and create your own Prisma database schema. Build models, define relationships, and generate ready-to-use code for your application.
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Prisma</Badge>
          <Badge variant="outline">Database</Badge>
          <Badge variant="outline">Schema Design</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="builder" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="builder">Schema Builder</TabsTrigger>
          <TabsTrigger value="enums">Enums</TabsTrigger>
          <TabsTrigger value="preview">Generated Code</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Models */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Models</span>
                    <Button onClick={addModel} size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Model
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Define your database models with fields and relationships
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {models.map((model) => (
                    <Card key={model.id} className="border-2">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" />
                            <div className="space-y-1">
                              <Label className="text-xs text-muted-foreground">Model Name</Label>
                              <Input
                                type="text"
                                value={model.name}
                                onChange={(e) => updateModelName(model.id, e.target.value)}
                                className="text-lg font-semibold border border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 focus:border-primary/50 bg-background/50 placeholder:text-muted-foreground"
                                placeholder="Enter model name (e.g., User, Post, Product)"
                              />
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeModel(model.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Fields */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Fields</Label>
                            <Button onClick={() => addField(model.id)} size="sm" variant="outline">
                              <Plus className="h-4 w-4 mr-1" />
                              Add Field
                            </Button>
                          </div>
                          <div className="space-y-3">
                            {model.fields.map((field) => (
                              <div key={field.id} className="p-3 border rounded-lg space-y-3">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={field.name}
                                    onChange={(e) => updateField(model.id, field.id, { name: e.target.value })}
                                    placeholder="Enter field name (e.g., email, title, createdAt)"
                                    className="flex-1 border border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 focus:border-primary/50"
                                  />
                                  <Select
                                    value={field.type}
                                    onValueChange={(value: string) => updateField(model.id, field.id, { type: value })}
                                  >
                                    <SelectTrigger className="w-32">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {fieldTypes.map(type => (
                                        <SelectItem key={type.value} value={type.value}>
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                      {enums.map(enumDef => (
                                        <SelectItem key={enumDef.name} value={enumDef.name}>
                                          {enumDef.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeField(model.id, field.id)}
                                    className="text-destructive hover:text-destructive h-8 w-8 p-0"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                                
                                {/* Field Attributes */}
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      checked={field.isId}
                                      onCheckedChange={(checked: boolean) => updateField(model.id, field.id, { isId: checked })}
                                    />
                                    <Label className="text-xs">Primary Key</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      checked={field.isUnique}
                                      onCheckedChange={(checked: boolean) => updateField(model.id, field.id, { isUnique: checked })}
                                    />
                                    <Label className="text-xs">Unique</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Switch
                                      checked={field.isRequired}
                                      onCheckedChange={(checked: boolean) => updateField(model.id, field.id, { isRequired: checked })}
                                    />
                                    <Label className="text-xs">Required</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger>
                                          <HelpCircle className="h-3 w-3 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Database-specific type mapping</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                    <Label className="text-xs">DB Type</Label>
                                  </div>
                                </div>

                                {/* Advanced Constraints */}
                                <div className="space-y-3">
                                  <Label className="text-xs font-medium">Advanced Constraints</Label>
                                  
                                  {/* Foreign Key */}
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Switch
                                        checked={!!field.constraints?.foreignKey}
                                        onCheckedChange={(checked: boolean) => {
                                          if (checked) {
                                            updateField(model.id, field.id, {
                                              constraints: {
                                                ...field.constraints,
                                                foreignKey: { references: 'id' }
                                              }
                                            })
                                          } else {
                                            updateField(model.id, field.id, {
                                              constraints: {
                                                ...field.constraints,
                                                foreignKey: undefined
                                              }
                                            })
                                          }
                                        }}
                                      />
                                      <Label className="text-xs">Foreign Key</Label>
                                    </div>
                                    
                                    {field.constraints?.foreignKey && (
                                      <div className="pl-6 space-y-2">
                                        <div className="flex items-center gap-2">
                                          <Label className="text-xs w-16">References:</Label>
                                          <Input
                                            value={field.constraints.foreignKey.references}
                                            onChange={(e) => updateField(model.id, field.id, {
                                              constraints: {
                                                ...(field.constraints || {}),
                                                foreignKey: {
                                                  ...(field.constraints?.foreignKey || { references: 'id' }),
                                                  references: e.target.value
                                                }
                                              }
                                            })}
                                            placeholder="id"
                                            className="flex-1"
                                          />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-2">
                                          <div className="flex items-center gap-2">
                                            <Label className="text-xs">On Delete:</Label>
                                            <Select
                                              value={field.constraints?.foreignKey?.onDelete || 'Restrict'}
                                              onValueChange={(value: string) => updateField(model.id, field.id, {
                                                constraints: {
                                                  ...(field.constraints || {}),
                                                  foreignKey: {
                                                    ...(field.constraints?.foreignKey || { references: 'id' }),
                                                    onDelete: value as 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
                                                  }
                                                }
                                              })}
                                            >
                                              <SelectTrigger className="flex-1">
                                                <SelectValue />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectItem value="Restrict">Restrict</SelectItem>
                                                <SelectItem value="Cascade">Cascade</SelectItem>
                                                <SelectItem value="SetNull">SetNull</SelectItem>
                                                <SelectItem value="NoAction">NoAction</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                          
                                          <div className="flex items-center gap-2">
                                            <Label className="text-xs">On Update:</Label>
                                            <Select
                                              value={field.constraints?.foreignKey?.onUpdate || 'Restrict'}
                                              onValueChange={(value: string) => updateField(model.id, field.id, {
                                                constraints: {
                                                  ...(field.constraints || {}),
                                                  foreignKey: {
                                                    ...(field.constraints?.foreignKey || { references: 'id' }),
                                                    onUpdate: value as 'Cascade' | 'Restrict' | 'SetNull' | 'NoAction'
                                                  }
                                                }
                                              })}
                                            >
                                              <SelectTrigger className="flex-1">
                                                <SelectValue />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectItem value="Restrict">Restrict</SelectItem>
                                                <SelectItem value="Cascade">Cascade</SelectItem>
                                                <SelectItem value="SetNull">SetNull</SelectItem>
                                                <SelectItem value="NoAction">NoAction</SelectItem>
                                              </SelectContent>
                                            </Select>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                  {/* Check Constraint */}
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Switch
                                        checked={!!field.constraints?.check}
                                        onCheckedChange={(checked: boolean) => {
                                          if (checked) {
                                            updateField(model.id, field.id, {
                                              constraints: {
                                                ...field.constraints,
                                                check: 'field > 0'
                                              }
                                            })
                                          } else {
                                            updateField(model.id, field.id, {
                                              constraints: {
                                                ...field.constraints,
                                                check: undefined
                                              }
                                            })
                                          }
                                        }}
                                      />
                                      <Label className="text-xs">Check Constraint</Label>
                                    </div>
                                    
                                    {field.constraints?.check && (
                                      <div className="pl-6">
                                        <Input
                                          value={field.constraints.check}
                                          onChange={(e) => updateField(model.id, field.id, {
                                            constraints: {
                                              ...field.constraints,
                                              check: e.target.value
                                            }
                                          })}
                                          placeholder="field > 0"
                                          className="flex-1"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Default Value */}
                                {field.type !== 'DateTime' && field.type !== 'Boolean' && (
                                  <div className="flex items-center gap-2">
                                    <Label className="text-xs w-20">Default:</Label>
                                    <Input
                                      value={field.defaultValue || ''}
                                      onChange={(e) => updateField(model.id, field.id, { defaultValue: e.target.value })}
                                      placeholder="Default value"
                                      className="flex-1"
                                    />
                                  </div>
                                )}

                                {/* Database Type */}
                                {field.type === 'String' && (
                                  <div className="flex items-center gap-2">
                                    <Label className="text-xs w-20">DB Type:</Label>
                                    <Select
                                      value={field.dbType || 'auto'}
                                      onValueChange={(value: string) => updateField(model.id, field.id, { dbType: value === 'auto' ? undefined : value })}
                                    >
                                      <SelectTrigger className="flex-1">
                                        <SelectValue placeholder="Auto" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="auto">Auto</SelectItem>
                                        <SelectItem value="VarChar(255)">VarChar(255)</SelectItem>
                                        <SelectItem value="Text">Text</SelectItem>
                                        <SelectItem value="Char(1)">Char(1)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Indexes */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Indexes</Label>
                            <Button onClick={() => addIndex(model.id)} size="sm" variant="outline">
                              <Plus className="h-4 w-4 mr-1" />
                              Add Index
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {model.indexes.map((index) => (
                              <div key={index.id} className="flex items-center gap-2 p-2 border rounded">
                                <Hash className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs">Index on: {index.fields.join(', ') || 'No fields'}</span>
                                <div className="flex items-center space-x-2 ml-auto">
                                  <Switch
                                    checked={index.isUnique}
                                    onCheckedChange={(checked: boolean) => {
                                      setModels(models.map(m => 
                                        m.id === model.id 
                                          ? { ...m, indexes: m.indexes.map(i => i.id === index.id ? { ...i, isUnique: checked } : i) }
                                          : m
                                      ))
                                    }}
                                  />
                                  <Label className="text-xs">Unique</Label>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeIndex(model.id, index.id)}
                                    className="text-destructive hover:text-destructive h-6 w-6 p-0"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Common schema patterns and templates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    const newModel: Model = {
                      id: Date.now().toString(),
                      name: 'User',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'email', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '3', name: 'name', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '4', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '5', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['email'], isUnique: false }
                      ]
                    }
                    setModels([...models, newModel])
                  }}>
                    <User className="h-4 w-4 mr-2" />
                    Add User Model
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    const newModel: Model = {
                      id: Date.now().toString(),
                      name: 'Post',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'title', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '3', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '4', name: 'published', type: 'Boolean', isRequired: true, isUnique: false, isId: false, defaultValue: 'false' },
                        { id: '5', name: 'authorId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '6', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '7', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['authorId'], isUnique: false },
                        { id: '2', fields: ['published', 'createdAt'], isUnique: false }
                      ]
                    }
                    setModels([...models, newModel])
                  }}>
                    <FileText className="h-4 w-4 mr-2" />
                    Add Post Model
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    const newEnum: Enum = {
                      id: Date.now().toString(),
                      name: 'UserRole',
                      values: ['USER', 'ADMIN', 'MODERATOR']
                    }
                    setEnums([...enums, newEnum])
                  }}>
                    <Type className="h-4 w-4 mr-2" />
                    Add UserRole Enum
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    // Add User model with foreign key relationship
                    const userModel: Model = {
                      id: Date.now().toString(),
                      name: 'User',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'email', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '3', name: 'name', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '4', name: 'role', type: 'UserRole', isRequired: true, isUnique: false, isId: false, defaultValue: 'USER' },
                        { id: '5', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '6', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['email'], isUnique: false }
                      ]
                    }
                    
                    const postModel: Model = {
                      id: (Date.now() + 1).toString(),
                      name: 'Post',
                      fields: [
                        { id: '7', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '8', name: 'title', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '9', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '10', name: 'published', type: 'Boolean', isRequired: true, isUnique: false, isId: false, defaultValue: 'false' },
                        { 
                          id: '11', 
                          name: 'authorId', 
                          type: 'String', 
                          isRequired: true, 
                          isUnique: false, 
                          isId: false,
                          constraints: {
                            foreignKey: {
                              references: 'id',
                              onDelete: 'Cascade',
                              onUpdate: 'Cascade'
                            }
                          }
                        },
                        { id: '12', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '13', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '2', fields: ['authorId'], isUnique: false },
                        { id: '3', fields: ['published', 'createdAt'], isUnique: false }
                      ]
                    }
                    
                    setModels([...models, userModel, postModel])
                  }}>
                    <Link className="h-4 w-4 mr-2" />
                    Add User-Post Relationship
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    // E-commerce schema
                    const productModel: Model = {
                      id: Date.now().toString(),
                      name: 'Product',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'name', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '3', name: 'description', type: 'String', isRequired: false, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '4', name: 'price', type: 'Decimal', isRequired: true, isUnique: false, isId: false },
                        { id: '5', name: 'stock', type: 'Int', isRequired: true, isUnique: false, isId: false, defaultValue: '0' },
                        { id: '6', name: 'categoryId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '7', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '8', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['categoryId'], isUnique: false },
                        { id: '2', fields: ['price'], isUnique: false }
                      ]
                    }

                    const categoryModel: Model = {
                      id: (Date.now() + 1).toString(),
                      name: 'Category',
                      fields: [
                        { id: '9', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '10', name: 'name', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '11', name: 'description', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '12', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '13', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: []
                    }

                    const orderModel: Model = {
                      id: (Date.now() + 2).toString(),
                      name: 'Order',
                      fields: [
                        { id: '14', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '15', name: 'userId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '16', name: 'status', type: 'OrderStatus', isRequired: true, isUnique: false, isId: false, defaultValue: 'PENDING' },
                        { id: '17', name: 'total', type: 'Decimal', isRequired: true, isUnique: false, isId: false },
                        { id: '18', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '19', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '3', fields: ['userId'], isUnique: false },
                        { id: '4', fields: ['status', 'createdAt'], isUnique: false }
                      ]
                    }

                    const orderStatusEnum: Enum = {
                      id: Date.now().toString(),
                      name: 'OrderStatus',
                      values: ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED']
                    }

                    setModels([...models, productModel, categoryModel, orderModel])
                    setEnums([...enums, orderStatusEnum])
                  }}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add E-commerce Schema
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    // Social media schema
                    const userModel: Model = {
                      id: Date.now().toString(),
                      name: 'User',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'username', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '3', name: 'email', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '4', name: 'bio', type: 'String', isRequired: false, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '5', name: 'avatar', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '6', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '7', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['username'], isUnique: false },
                        { id: '2', fields: ['email'], isUnique: false }
                      ]
                    }

                    const postModel: Model = {
                      id: (Date.now() + 1).toString(),
                      name: 'Post',
                      fields: [
                        { id: '8', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '9', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '10', name: 'imageUrl', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '11', name: 'authorId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '12', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '13', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '3', fields: ['authorId'], isUnique: false },
                        { id: '4', fields: ['createdAt'], isUnique: false }
                      ]
                    }

                    const commentModel: Model = {
                      id: (Date.now() + 2).toString(),
                      name: 'Comment',
                      fields: [
                        { id: '14', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '15', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '16', name: 'authorId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '17', name: 'postId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '18', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '19', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '5', fields: ['authorId'], isUnique: false },
                        { id: '6', fields: ['postId'], isUnique: false }
                      ]
                    }

                    setModels([...models, userModel, postModel, commentModel])
                  }}>
                    <Users className="h-4 w-4 mr-2" />
                    Add Social Media Schema
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    // Task management schema
                    const projectModel: Model = {
                      id: Date.now().toString(),
                      name: 'Project',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'name', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '3', name: 'description', type: 'String', isRequired: false, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '4', name: 'status', type: 'ProjectStatus', isRequired: true, isUnique: false, isId: false, defaultValue: 'ACTIVE' },
                        { id: '5', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '6', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['status'], isUnique: false }
                      ]
                    }

                    const taskModel: Model = {
                      id: (Date.now() + 1).toString(),
                      name: 'Task',
                      fields: [
                        { id: '7', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '8', name: 'title', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '9', name: 'description', type: 'String', isRequired: false, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '10', name: 'status', type: 'TaskStatus', isRequired: true, isUnique: false, isId: false, defaultValue: 'TODO' },
                        { id: '11', name: 'priority', type: 'Priority', isRequired: true, isUnique: false, isId: false, defaultValue: 'MEDIUM' },
                        { id: '12', name: 'assigneeId', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '13', name: 'projectId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '14', name: 'dueDate', type: 'DateTime', isRequired: false, isUnique: false, isId: false },
                        { id: '15', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '16', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '2', fields: ['projectId'], isUnique: false },
                        { id: '3', fields: ['assigneeId'], isUnique: false },
                        { id: '4', fields: ['status', 'priority'], isUnique: false }
                      ]
                    }

                    const projectStatusEnum: Enum = {
                      id: Date.now().toString(),
                      name: 'ProjectStatus',
                      values: ['ACTIVE', 'COMPLETED', 'ARCHIVED', 'ON_HOLD']
                    }

                    const taskStatusEnum: Enum = {
                      id: (Date.now() + 1).toString(),
                      name: 'TaskStatus',
                      values: ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']
                    }

                    const priorityEnum: Enum = {
                      id: (Date.now() + 2).toString(),
                      name: 'Priority',
                      values: ['LOW', 'MEDIUM', 'HIGH', 'URGENT']
                    }

                    setModels([...models, projectModel, taskModel])
                    setEnums([...enums, projectStatusEnum, taskStatusEnum, priorityEnum])
                  }}>
                    <CheckSquare className="h-4 w-4 mr-2" />
                    Add Task Management Schema
                  </Button>

                  <Button variant="outline" className="w-full justify-start" onClick={() => {
                    // Blog/CMS schema
                    const authorModel: Model = {
                      id: Date.now().toString(),
                      name: 'Author',
                      fields: [
                        { id: '1', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '2', name: 'name', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '3', name: 'email', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '4', name: 'bio', type: 'String', isRequired: false, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '5', name: 'avatar', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '6', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '7', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '1', fields: ['email'], isUnique: false }
                      ]
                    }

                    const articleModel: Model = {
                      id: (Date.now() + 1).toString(),
                      name: 'Article',
                      fields: [
                        { id: '8', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '9', name: 'title', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '10', name: 'slug', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '11', name: 'content', type: 'String', isRequired: true, isUnique: false, isId: false, dbType: 'Text' },
                        { id: '12', name: 'excerpt', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '13', name: 'featuredImage', type: 'String', isRequired: false, isUnique: false, isId: false },
                        { id: '14', name: 'status', type: 'ArticleStatus', isRequired: true, isUnique: false, isId: false, defaultValue: 'DRAFT' },
                        { id: '15', name: 'authorId', type: 'String', isRequired: true, isUnique: false, isId: false },
                        { id: '16', name: 'publishedAt', type: 'DateTime', isRequired: false, isUnique: false, isId: false },
                        { id: '17', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '18', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '2', fields: ['authorId'], isUnique: false },
                        { id: '3', fields: ['status', 'publishedAt'], isUnique: false },
                        { id: '4', fields: ['slug'], isUnique: false }
                      ]
                    }

                    const tagModel: Model = {
                      id: (Date.now() + 2).toString(),
                      name: 'Tag',
                      fields: [
                        { id: '19', name: 'id', type: 'String', isRequired: true, isUnique: false, isId: true, defaultValue: 'cuid()' },
                        { id: '20', name: 'name', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '21', name: 'slug', type: 'String', isRequired: true, isUnique: true, isId: false },
                        { id: '22', name: 'createdAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false, defaultValue: 'now()' },
                        { id: '23', name: 'updatedAt', type: 'DateTime', isRequired: true, isUnique: false, isId: false },
                      ],
                      indexes: [
                        { id: '5', fields: ['slug'], isUnique: false }
                      ]
                    }

                    const articleStatusEnum: Enum = {
                      id: Date.now().toString(),
                      name: 'ArticleStatus',
                      values: ['DRAFT', 'PUBLISHED', 'ARCHIVED']
                    }

                    setModels([...models, authorModel, articleModel, tagModel])
                    setEnums([...enums, articleStatusEnum])
                  }}>
                    <FileText className="h-4 w-4 mr-2" />
                    Add Blog/CMS Schema
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use String with @default(cuid()) for IDs instead of auto-incrementing integers</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Always include createdAt and updatedAt fields for audit trails</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Add indexes on foreign keys and frequently queried fields</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use enums for fields with predefined values</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Set up foreign key constraints with proper onDelete/onUpdate behavior</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use check constraints to enforce data validation rules</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="enums" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Enums</span>
                <Button onClick={addEnum} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Enum
                </Button>
              </CardTitle>
              <CardDescription>
                Define custom types with predefined values
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {enums.map((enumDef) => (
                <Card key={enumDef.id} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Type className="h-4 w-4 text-primary" />
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Enum Name</Label>
                          <Input
                            type="text"
                            value={enumDef.name}
                            onChange={(e) => updateEnum(enumDef.id, { name: e.target.value })}
                            className="text-lg font-semibold border border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 focus:border-primary/50 bg-background/50 placeholder:text-muted-foreground"
                            placeholder="Enter enum name (e.g., UserRole, Status, Priority)"
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeEnum(enumDef.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Values</Label>
                      <div className="space-y-2">
                        {enumDef.values.map((value, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              value={value}
                              onChange={(e) => {
                                const newValues = [...enumDef.values]
                                newValues[index] = e.target.value
                                updateEnum(enumDef.id, { values: newValues })
                              }}
                              placeholder="Value"
                              className="flex-1"
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const newValues = enumDef.values.filter((_, i) => i !== index)
                                updateEnum(enumDef.id, { values: newValues })
                              }}
                              className="text-destructive hover:text-destructive h-8 w-8 p-0"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            updateEnum(enumDef.id, { values: [...enumDef.values, 'NEW_VALUE'] })
                          }}
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Value
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generated Schema</CardTitle>
              <CardDescription>
                Your Prisma schema code generated in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock 
                code={generateSchemaCode()} 
                language="prisma" 
                filename="schema.prisma"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 