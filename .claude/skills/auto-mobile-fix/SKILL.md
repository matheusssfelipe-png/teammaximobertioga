---
name: auto-mobile-fix
description: Analisa e otimiza automaticamente responsividade mobile do site
---

# 🔧 Auto Mobile Fix - Otimização Automática

Skill que **realmente otimiza** o site para mobile - não é só checklist!

## O que faz

1. **Analisa o HTML** atual
2. **Identifica problemas** de mobile
3. **Faz as mudanças** automaticamente
4. **Commit + Deploy** na Vercel

## Otimizações automáticas

### Tipografia
- Garante H1 entre 28-32px no mobile
- Garante H2 entre 22-26px no mobile
- Garante P entre 14-16px no mobile
- Ajusta line-height para 1.6+ no mobile

### Buttons & Links
- Força mínimo 48x48px em botões
- Garante espaçamento de 12px entre botões
- Adiciona padding em links pequenos

### Layout
- Verifica padding em mobile (16-24px)
- Remove overflow horizontal
- Valida media queries em 768px

### Imagens
- Verifica max-width: 100%
- Valida aspect-ratio em héroe
- Otimiza imagens se > 150KB

### Formulários
- Força inputs com 48px+ de altura
- Verifica espaçamento entre campos
- Valida checkboxes/radios

## Como usar

```bash
/auto-mobile-fix
```

Depois:
```bash
/deploy-site
```

## Resultado

✅ Site 100% mobile-optimized
✅ Passa em todos os breakpoints
✅ Touch targets corretos
✅ Performance otimizada
✅ Automático + Deploy pronto

---

**Use quando:** Acabar de fazer mudanças no site
**Ideal para:** Antes de fazer deploy na Vercel
