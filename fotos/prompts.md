# Prompts de fotos (versión 2: realismo)

**Por qué la versión 1 no sirvió:** las fotos salían borrosas (eran miniaturas de unos 200 px) y con el «look IA»: piel de plástico, sonrisas perfectas, atardeceres dorados de postal y todo demasiado limpio y simétrico.

**Qué busca la versión 2:** fotos que parezcan tomadas por una persona real, con una cámara real, en Zarzal.

## Cómo usar
1. Genera cada foto con su prompt. Pega el bloque «Reglas de realismo» al final de cada prompt.
2. Usa la máxima resolución disponible: mínimo 2048 px en el lado largo.
3. Guarda cada una en `fotos/originales/<nombre>.jpg`.
4. Ejecuta `npm run imagenes`.

## Reglas de realismo (añadir a TODOS los prompts)
```
Candid documentary photograph, shot on a Fujifilm X-T4 with a 35mm lens, natural available light,
real skin texture with pores, fine lines, small blemishes and slight asymmetry, natural imperfect teeth
(not veneers, not overly white), slightly messy hair, everyday clothes with wrinkles, authentic
mid-laugh expression caught in motion, real Colombian town environment with ordinary details,
subtle film grain, true-to-life colors, not retouched, not a stock photo, not a model, no HDR,
no glow, no bokeh balls, no perfect symmetry, no plastic skin, no oversaturated sunset.
```

Si el generador acepta un prompt negativo:
`plastic skin, airbrushed, CGI, 3d render, illustration, perfect teeth, veneers, overly white teeth, stock photo, studio lighting, oversaturated, HDR, extra fingers, deformed hands, text, watermark`

---

## hero · 3:2 horizontal, ≥ 2400 px
Woman around 30 from Valle del Cauca, Colombia, laughing with her head slightly tilted back, eyes half closed, arms loosely open, standing on a rural road at the edge of sugarcane fields near Zarzal, late afternoon soft light (not sunset), light linen shirt moving in the wind, a few strands of hair across her face, framed slightly off-center to the right with empty sky and field on the left.

## joven · 18–25 años · 4:5 vertical
Colombian young man about 20, laughing genuinely at something a friend off-camera said, sitting on the steps of a colorful house in a small town in Valle del Cauca, plain light blue t-shirt, short curly hair, motorcycle parked in the background slightly out of focus, afternoon shade.

## adulta · 30–45 años · 4:5 vertical
Colombian woman about 40, mother, laughing out loud with a hand partly raised near her chest, sitting at a plastic table in a home patio with potted plants and a tinto (coffee) cup, white cotton blouse, hair loosely tied, soft morning light through a mesh roof.

## adulto · 50–65 años · 4:5 vertical
Colombian man about 58 with grey temples and a bit of stubble, smiling broadly showing teeth, standing next to his bicycle on a rural road with sugarcane, blue button shirt with rolled sleeves, sweat and sun-tanned skin, cloudy bright day.

## mayor · 70+ años · 4:5 vertical
Colombian grandmother about 75 with short white hair and visible wrinkles, laughing with her granddaughter (about 15) who hugs her from the side, inside a simple living room with a floral sofa and family photos on the wall, window light, both wearing everyday clothes.

## doctora · 4:5 vertical (referencia para el fotógrafo)
Colombian female dentist about 40, dark brown hair in a low ponytail, warm natural smile with slight crow's feet, clean white dental coat over a navy blouse, standing relaxed at the reception of a small modern dental office with light wood slat wall and white counter, real office details (computer, appointment book, white orchid), soft window light mixed with warm ceiling lights, photographed at eye level with an 85mm lens.

## doctora-escucha · 3:2 horizontal
Colombian female dentist about 40 in a white coat, seated at the same height as an elderly male patient about 72, gently holding his forearm while listening and smiling, he is explaining something with his hands, inside a bright small dental office with a dental chair partly visible behind them, natural window light, candid moment.

## doctora-exterior · 4:5 vertical
Colombian woman about 40 (the same dentist, without coat), navy blouse, dark hair down, laughing naturally while walking on a tree-lined street of a small Colombian town, dappled afternoon light, candid street photography.

## fachada
Foto **real** del consultorio (la que envió el consultorio). No se genera con IA.

---

## Versión 3 (actual): estilo campaña, generadas con Gemini (2026-11-13)
Las fotos adulto, mayor, doctora y doctora-escucha se rehicieron en Gemini con un estilo de campaña aspiracional («instagrameable»): luz dorada, bokeh cremoso, paleta marfil, dorado y azul, lente de 85 mm. La foto doctora-escucha se pidió como «la MISMA doctora» para mantener la cara. Las versiones anteriores, de estilo documental, quedaron en `fotos/anteriores/`.
