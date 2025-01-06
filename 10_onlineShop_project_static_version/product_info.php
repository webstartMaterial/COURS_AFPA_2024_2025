<?php
require_once("inc/header.php");
?>

<!-- Body content -->

<div class="card col-md-4">
    <img src="pictures/black_t-shirt.png" class="card-img-top" alt="Black t-shirt">
    <div class="card-body">
        <h5 class="card-title">Black t-shirt</h5>
        <p class="card-text">Some quick example text.</p>
    </div>
</div>

<div class="col-md-4">
    <ul class="list-group">
        <li class="list-group-item">Category : t-shirt</li>
        <li class="list-group-item">Color : black</li>
        <li class="list-group-item">Size : S</li>
        <li class="list-group-item">Price : 99€</li>

        <form action="">
            <li class="list-group-item">
                <p>Quantity :</p>
                <select class="custom-select" id="exampleFormControlSelect1">
                    <option selected>Choose Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>

            <input type="submit" class="btn btn-outline-secondary mt-5 w-100" disabled value="Add to cart">

        </form>

    </ul>
</div>

<?php
require_once("inc/footer.php");
?>