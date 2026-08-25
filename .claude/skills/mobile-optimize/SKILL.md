---
name: mobile-optimize
description: Otimiza responsividade e performance mobile do site
---

# 📱 Mobile Optimize - Team Máximo Bertioga

Ferramenta completa para verificar e otimizar a responsividade mobile.

## O que verifica

### Viewport & Meta Tags
- ✅ Meta viewport configurado corretamente
- ✅ Meta theme-color definido
- ✅ Font scaling desabilitado

### Tipografia Mobile
- ✅ Font sizes fluidas (não muito grande/pequena)
- ✅ Line height adequado (mín 1.5)
- ✅ Letter spacing controlado

### Touch Targets
- ✅ Botões com mínimo 48x48px
- ✅ Links com espaçamento de toque
- ✅ Inputs com altura mínima 48px

### Layout & Spacing
- ✅ Padding no mobile (16px-24px)
- ✅ Margens proporcionais
- ✅ Sem overflow horizontal
- ✅ Imagens com max-width: 100%

### Performance Mobile
- ✅ Imagens otimizadas (< 150KB)
- ✅ CSS não incha demais
- ✅ Sem scripts bloqueantes
- ✅ Lazy loading quando necessário

### Breakpoints
- ✅ 320px (mobile pequeno)
- ✅ 375px (iPhone X)
- ✅ 480px (mobile grande)
- ✅ 768px (tablet)
- ✅ 1024px (desktop)

## Como usar

```bash
/mobile-optimize
```

## Checklist de Otimização

### 1. Tipografia
- [ ] H1: 28-32px no mobile
- [ ] H2: 22-26px no mobile
- [ ] P: 14-16px no mobile
- [ ] Line-height: 1.5+ em mobile

### 2. Buttons & Links
- [ ] Botões: min 48x48px
- [ ] Espaçamento entre botões: 12px+
- [ ] Links: padding de 8px+

### 3. Imagens
- [ ] Logo: max 48px no mobile
- [ ] Hero: 100% width, aspect-ratio mantido
- [ ] Galeria: responsive grid
- [ ] Tamanho arquivo: otimizado

### 4. Formulários
- [ ] Inputs: height 48px+
- [ ] Labels legíveis
- [ ] Spacing entre campos: 16px
- [ ] Checkboxes/radios: 20px+

### 5. Header & Nav
- [ ] Logo dimensionado correto
- [ ] Hamburger menu: 44x44px
- [ ] Menu overlay toca topo do viewport
- [ ] Padding: 12-16px

### 6. Seções
- [ ] Padding: 24px-40px no mobile
- [ ] Padding: 60px-100px no desktop
- [ ] Sem scroll horizontal
- [ ] Breakpoint 768px (tablet)

### 7. Footer
- [ ] Links com espaçamento
- [ ] Texto legível
- [ ] Colunas se reorganizam

## Problemas Comuns

❌ **Texto muito pequeno** → font-size mínimo 14px
❌ **Botões muito pequenos** → min 48px
❌ **Sem padding** → adicionar padding 16-24px
❌ **Overflow horizontal** → max-width: 100%
❌ **Imagens grande demais** → comprimir e otimizar
❌ **Sem media queries** → adicionar breakpoints

## Ferramentas para testar

- Chrome DevTools → F12 → Responsive Mode
- Safari → Responsive Design Mode
- Vercel Preview → mobile view
- Real device test

## Próximos passos

1. Abra Chrome DevTools (F12)
2. Ative Responsive Mode (Ctrl+Shift+M)
3. Teste em 320px, 375px, 480px, 768px
4. Verifique o checklist acima
5. Faça ajustes conforme necessário
6. Commit + push com `/deploy-site`

---

**Dica:** Sempre testar em real device também! 📲
