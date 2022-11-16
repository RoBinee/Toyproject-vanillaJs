# navbar + scroll project

## Why

I got navbar Idea from [color-name] site.

## The problems

### 1. The structure of navbar

First I made a navbar as...

```javascript
<nav class="navbar">
  <ul class="links-container">
    <li class="link">
      <a href="#">item</a>
    </li>
  </ul>
</nav>
```

Although I wanted to make a very simple navbar, the structure looked not simple.

Then I found out I set css same way in different element. It looked so inefficient.

So I searched the standard structure of navbar and I changed the structure in this way.
Also setting css looked simple and efficient.

```javascript
<nav class="navbar">
  <a href="#" class="link">
    item
  </a>
</nav>
```

### 2. Set a tag text in the center

The problems was these

1. Set text of a tag in the center
2. Make a tag fill the container ( like a grid-template-row:1fr 1fr)

The solution was using flex-box -> especially flex-grow

flex-grow property takes all of the leftover space

so I use flex-grow to make a tag fill the container. Also I learned that I can control text of a tag through controling a
