<?php
require_once 'LibreriaPDO.php';
session_start();

$base= new DB('demo');



if (isset($_SESSION['id'])) {
    
    $base->ConsultaOffers('select * from offers ',[]);
    $base->ConsultaCompanies('select * from companies ',[]);
    $base->ConsultaCategories('select * from categories ',[]);
    for ($i=0; $i < count($base->offers); $i++) { 

        for ($j=0; $j < count($base->companies); $j++) { 

            for ($k=0; $k < count($base->categories); $k++) { 
                
                if ($base->offers[$i]['id_company'] == $base->companies[$j]['id']) {

                    $base->offers[$i]['id_company'] = $base->companies[$j]['name'];
                }

                if ($base->offers[$i]['if_category'] == $base->categories[$k]['id']) {

                    $base->offers[$i]['if_category'] = $base->categories[$k]['name'];
                }

            }
        }

    }


    echo json_encode($base-> offers);

}else {
    echo json_encode('unset');
}