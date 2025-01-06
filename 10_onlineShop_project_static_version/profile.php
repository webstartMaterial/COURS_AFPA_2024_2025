<?php
require_once("inc/header.php");
?>

<!-- Body content -->

<div class="col-md-12 mb-5">
    <h2 class="text-center">Hi Mr Samih Habbani, welcome to your profile !</h2>
</div>

<div class="card col-md-4">
    <img src="pictures/avatar_male.png" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Samih Habbani</h5>
    </div>

    <ul class="list-group list-group-flush">
        <li class="list-group-item text-center">mail@gmail.com</li>
        <li class="list-group-item text-center">5 rue veille du temple</li>
        <li class="list-group-item text-center">75003 Paris</li>
    </ul>
</div>

<div class="col-md-4">
    <ul class="list-group">
        <li class="list-group-item text-center">
            <h5>My orders</h5>
        </li>
        <li class="list-group-item text-center">
            <p>Order n°40 from the 2021-03-01</p>
            <p class="badge badge-primary"> In progress</p>
        </li>
        <li class="list-group-item text-center">
            <p>Order n°41 from the 2021-01-01</p>
            <p class="badge badge-primary"> Sent </p>
        </li>
    </ul>

    <ul class="list-group mt-5">
        <li class="list-group-item text-center">
            <h5>All my orders</h5>
        </li>
        <li class="list-group-item text-center">
            <p>Order n°1 from the 2020-03-01</p>
            <p class="badge badge-primary"> Sent</p>
        </li>
    </ul>
</div>


<?php
require_once("inc/footer.php");
?>