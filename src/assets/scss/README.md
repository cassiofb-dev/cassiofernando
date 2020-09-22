# Themes with SASS
## SCSS
```scss
@import 'themes.scss';

.app-container {
  @include themify($themes) {
    color: themed('textColor');  
    background-color: themed('backgroundColor');  
  }

  .title {
    font-family: sans-serif;
    font-weight: lighter;
  }

  .button {
    cursor: pointer;
    border-radius: 5px;
    padding: 15px 32px;
    display: inline-block;
    transition: color 0.1s, border-color 0.1s, background-color 0.1s;

    @include themify($themes) {
      border: themed('buttonBorder');
      color: themed('buttonTextColor'); 
      border-color: themed('buttonTextColor');
      background-color: themed('buttonColor');
      text-transform: themed('buttonTextTransform');

      &:hover {
        color: themed('buttonTextHoverColor'); 
        border-color: themed('buttonTextHoverColor');
        background-color: themed('buttonHoverColor');
      }
    }

  } 
}
```
## HTML
```html
<main id="app-root">

  <div class="theme-light">
    <div class="theme-container">
      <h1 class="title">Light theme</h1>
      <button class="button">A button</button>
    </div>
  </div>

  <div class="theme-dark">
    <div class="theme-container">
      <h1 class="title">Dark theme</h1>
      <button class="button">A button</button>
    </div>
  </div>

</main>
```

---

see live example: https://codepen.io/dmitriy_borodiy/pen/RKzwJp

---

https://github.com/dmitru inspiration and base for the themes