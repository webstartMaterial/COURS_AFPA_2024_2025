<?php

    require_once("./Calculator2024.php");
    require_once("./Calculator2025.php");
    require_once("./ReportCalculator.php");

    // année
    $calculator2024 = new Calculator2024(100000);
    $calculator2025 = new Calculator2025(200000);

    // report
    $report2024 = new ReportCalculator($calculator2024);
    $report2024->makeReport();

    $report2025 = new ReportCalculator($calculator2025);
    $report2025->makeReport();


?>