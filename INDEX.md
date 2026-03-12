# FPUNA AI Education Repository Index
# Mapa completo de recursos y configuraciones

## 📁 Estructura Organizacional
```
fpuna-ai-education/
├── .claude/                 # Configuracion Claude: agents, skills, reglas
├── _compartido/             # Recursos compartidos y plantillas
├── cursos/                  # Cursos por track y especialidad
├── docs/                    # Documentacion organizada
│   ├── assets/images/       # Imagenes de referencia
│   ├── infra/               # Auditorias y estrategia de infraestructura
│   ├── marketing/           # Material de marketing
│   ├── migration/           # Migraciones y portabilidad
│   ├── notes/               # Notas y listas
│   ├── onboarding/          # Onboarding y usuarios
│   ├── openclaw/            # OpenClaw: auditorias, setup, guias
│   ├── operations/          # Operaciones, runbooks, status
│   ├── phases/              # Reportes por fase
│   ├── research/            # Investigacion y referencias
│   ├── setup/               # Instalacion y configuracion
│   ├── solstein/            # Informes Solstein
│   └── vscode/              # Guias de VSCode
├── scripts/                 # Scripts y hooks
├── shared/                  # Recursos adicionales
└── solstein/                # Proyecto Solstein (codigo/artefactos)
```

## 🎯 Objetivos del Repositorio
- **Setup en 4 minutos**: Cada carpeta de proveedor es standalone
- **75% test coverage**: Enforzado en todos los workflows
- **Inteligencia Cultural**: Contexto Paraguayo/MERCOSUR integrado
- **Estándares FPUNA**: Alineación curricular universitaria

## 📖 Setup por Proveedor

### Claude (Recomendado para Académico)
```bash
cp -r claude/ ~/fpuna-ai-setup/
cp -r claude/.claude/ ~/
cd ~/fpuna-ai-setup/
npm install && npm run setup-fpuna
```

### Cursor (IDE Específico)
```bash
cp -r cursor/ ~/cursor-workspace/
cd ~/cursor-workspace/
cursor --open .
```

### Windsurf (Nuevo)  
```bash
cp -r windsurf/ ~/windsurf-project/
cd ~/windsurf-project/
windsurf --config .windsurf-rules.md
```

## 🧠 Inteligencia Cultural
- **PyNN Integration**: Red neuronal Paraguaya
- **IVA Compliance**: Cálculos tributarios MERCOSUR  
- **Trade Data**: Información comercial regional
- **Economic Forecasts**: Pronósticos económicos locales

## 📊 Métricas de Calidad
- Coverage mínimo: 75% de tests
- Formato: Black (120 chars)
- Linting: Flake8 académico
- Commits: Conventional + cultural context

## 🏗️ Arquitectura MCP
- **GitHub Server**: Gestión académica
- **Filesystem Server**: Indexación código
- **Playwright Server**: Testing web académico

## 🎓 Recursos Académicos
- Configuraciones por especialidad (software, aeroespacial, electrónica)
- Ejercicios resueltos por módulo
- Plantillas docentes FPUNA
- Verificaciones de calidad automática
