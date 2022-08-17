<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul class="loremList">
    <?php 
      if($_REQUEST["loremNo"] == "0"){
        ?>
          <li class="lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus, quibusdam expedita sunt nihil magnam molestias illo cupiditate exercitationem dolores?</li>
        <?php 
      } else if($_REQUEST["loremNo"] == "1"){
        ?>
          <li class="lorem2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum qui adipisci quos sequi nisi reiciendis nam quasi earum impedit.</li>
        <?php  
      } else if($_REQUEST["loremNo"] == "2"){
        ?>
          <li class="lorem3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem corporis ratione eius sapiente blanditiis eum quisquam nobis ducimus eligendi saepe?</li>
        <?php 
      } else if($_REQUEST["loremNo"] == "3"){
        ?>
          <li class="lorem4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima, consequuntur voluptatum illo placeat quasi! Dolores numquam praesentium dolorem ipsa.</li>
        <?php 
      } else {
        ?>
          <li class="lorem5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nemo labore? Recusandae, eum perspiciatis nihil enim sapiente nostrum eligendi atque!</li>
        <?php
      }
      ?>
  </ul>
</body>
</html>