# Burger
![COVER](./cover.png)

ARIA-accesible burger menu. If you want hide burger trigger when burger menu is open set z-index < 999 to trigger. 

Version: 1.0.1

## Docs
HTML
```html
<!-- Trigger -->
<button class="uvstm-burger_trigger">
  [TRIGGER]
</button>

<!-- Trigger (with svg burger) -->
<button class="uvstm-burger_trigger">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="uvstm-burger-trigger_arrow--top"
          d="M4.28571 10.0001C4.28571 9.21112 4.92531 8.57153 5.71428 8.57153H34.2857C35.0747 8.57153 35.7143 9.21112 35.7143 10.0001C35.7143 10.7891 35.0747 11.4287 34.2857 11.4287H5.71428C4.92531 11.4287 4.28571 10.7891 4.28571 10.0001Z"
          fill="black" />
    <path class="uvstm-burger-trigger_arrow--center"
          d="M4.28571 20.0001C4.28571 19.2111 4.92531 18.5715 5.71428 18.5715H34.2857C35.0747 18.5715 35.7143 19.2111 35.7143 20.0001C35.7143 20.7891 35.0747 21.4287 34.2857 21.4287H5.71428C4.92531 21.4287 4.28571 20.7891 4.28571 20.0001Z"
          fill="black" />
    <path class="uvstm-burger-trigger_arrow--bottom"
          d="M5.71428 28.5715C4.92531 28.5715 4.28571 29.2111 4.28571 30.0001C4.28571 30.7891 4.92531 31.4287 5.71428 31.4287H34.2857C35.0747 31.4287 35.7143 30.7891 35.7143 30.0001C35.7143 29.2111 35.0747 28.5715 34.2857 28.5715H5.71428Z"
          fill="black" />
  </svg>
</button>

<!-- Menu -->
<div class="uvstm-burger-menu" id="uvstm-burger-menu">
  <div class="uvstm-burger-menu_wrapper">
    [MENU]
  </div>
</div>
```

SCSS
```scss
.uvstm-burger-menu--open // burger menu open

// Set initial menu position
.uvstm-burger {
  &-menu {
    transform: translate();
  }
}
```

JS
```javascript
const instance = new UvstmBurger();
instance.init();
```

## Get it now
HTML
```html
<button class="uvstm-burger_trigger">
  [TRIGGER]
</button>

<div class="uvstm-burger-menu" id="uvstm-burger-menu">
  <div class="uvstm-burger-menu_wrapper">
    [MENU]
  </div>
</div>
```

CSS
```
https://unniiiverse.github.io/cdn/module/uvstm/burger/@1.0.1/style.min.css
```

JS
```
https://unniiiverse.github.io/cdn/module/uvstm/burger/@1.0.1/app.min.js
```

## [CODEPEN](https://codepen.io/unniiiverse/pen/mdjjbPp) [GITHUB](https://github.com/unniiiverse/uvstm-burger)
unniiiverse ©️ 2023
