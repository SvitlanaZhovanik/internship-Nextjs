## Project structure

```
|-- frontend
  |-- components -> folder with reusable components
  |-- data -> static data (back-end alternative)
  |-- hooks -> custom users hooks
  |-- pages -> pages and routing
      |-- api -> api, that are required to work
  |-- public
    |-- favicon -> favicon for the site
    |-- images -> images та svg, that are required to work
  |-- styles -> global styles
  |-- views -> individual components (compositions) for blocks
```

## Components API:

- ### Button ✅

| Prop         | Default | Description                                     |
| ------------ | :-----: | ----------------------------------------------- |
| `variant`    | `link`  | choose the correct type: `link` or `button`     |
| `appearance` |   `-`   | choose the correct option: `primary` or `ghost` |
| `children`   |   `-`   | text, icons or they are together                |

---

- ### Grid ✅

| Prop         | Default | Description                                             |
| ------------ | :-----: | ------------------------------------------------------- |
| `tag`        |  `div`  | add proper tag, recommended `ul`                        |
| `appearance` |   `-`   | choose the correct variant: `col-2`, `col-3` or `col-4` |
| `children`   |   `-`   | element or component, text, images ect.                 |

---

- ### Heading ✅

| Prop       | Default | Description                                                     |
| ---------- | :-----: | --------------------------------------------------------------- |
| `tag`      |   `-`   | choose the heading types you'd need: `h1`, `h2`, `h3` or `h4`   |
| `text`     |   `-`   | heading text                                                    |
| `position` | `null`  | current position in relation to the viewport: `center`, `right` |

---

- ### Paragraph ✅

| Prop       | Default | Description                                                                            |
| ---------- | :-----: | -------------------------------------------------------------------------------------- |
| `size`     |  `xl`   | choose the heading types you'd need: `sm`, `lg`, `xl`, `xxl`(_accent color_) or `xxxl` |
| `children` |   `-`   | only as text element or component.                                                     |

---

- ### Section ✅

| Prop       |  Default  | Description                                               |
| ---------- | :-------: | --------------------------------------------------------- |
| `type`     | `primary` | choose the correct type: `hero`, `primary` or `secondary` |
| `children` |    `-`    | elements or components                                    |

---
