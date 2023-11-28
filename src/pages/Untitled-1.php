<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, file_name, p_id, u_name,u_num, u_pass,imgSr,b_id,md_name,cat_name");
// echo ($_GET['file_name']) ;

$fileName = $_GET['file_name'];
$curl     = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/client_comments.php');
// echo $fileName;
if ($fileName == 'client_comments') {
    $curl = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/client_comments.php');
    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Typ:e application/json',
            'sis_id: 1'
        )
    );
}
else if ($fileName == 'product_list') {
    $curl = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/product_list.php');
    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1'
        )
    );
}
else if ($fileName == 'product_details') {
    $curl       = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/product_details.php');
    $product_id = $_GET['p_id'];
    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'product_id: ' . $product_id
        )
    );
}
else if ($fileName == 'cat_list') {
    $curl     = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/pro_brand_wise_cat.php');
    $brand_id = $_GET['b_id'];
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'brand_id: ' . $brand_id
        )
    );
}
else if ($fileName == 'model_list') {
    $curl     = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/pro_cat_wise_model.php');
    $cat_name = $_GET['cat_name'];
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'category: ' . $cat_name
        )
    );
}
else if ($fileName == 'search_list') {
    $curl       = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/model_wise_product.php');
    $model_name = $_GET['md_name'];
    // $category_name = $_GET['cat_name'];
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'model_name: ' . $model_name
        )
    );
}
else if ($fileName == 'user_login') {
    $curl         = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/user_login.php');
    $mobileNumber = $_GET['u_num'];
    $password     = $_GET['u_pass'];
    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'mobile: ' . $mobileNumber,
            'password: ' . $password,
        )
    );
}
else if ($fileName == 'user_registration') {
    $curl         = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/user_registration.php');
    $name         = $_GET['u_name'];
    $mobileNumber = $_GET['u_num'];
    $password     = $_GET['u_pass'];
    $otp          = $_GET['u_otp'];

    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'name: ' . $name,
            'mobile: ' . $mobileNumber,
            'password: ' . $password,
            'otp: ' . $otp,
        )
    );
}
else if ($fileName == 'send_otp') {
    $curl         = curl_init('http://202.40.181.98:9090/resale/web_api/version_1_0_1/send_otp.php');
    $mobileNumber = $_GET['u_num'];
    // Set HTTP Header for POST request 
    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'sis_id: 1',
            'mobile: ' . $mobileNumber,
        )
    );
}
else if ($fileName == 'img_src') {
    $imgSr = $_GET['imgSr'];
    $curl  = curl_init('http://202.40.181.98:9090/' . $imgSr);

    curl_setopt(
        $curl,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: image/*',
            'sis_id: 1',
        )
    );
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

    $output = curl_exec($curl);
    // echo $output;
    if ($output === false) {
        echo 'Curl error: ' . curl_error($curl);
    }
    else {
        $contentType = curl_getinfo($curl, CURLINFO_CONTENT_TYPE);
        header('Content-Type: ' . $contentType);
        echo $output; // Output the image directly
    }

    curl_close($curl);

}


curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);



$output = curl_exec($curl);

if ($output === false) {
    echo 'Curl error: ' . curl_error($curl);
}
else {
    $decoded_output = json_decode($output, true);
    if ($decoded_output === null) {
        echo 'Error decoding JSON';
    }
    else {
        header('Content-Type: application/json'); // Set JSON content type header
        echo json_encode($decoded_output); // Output the decoded JSON data
    }
}

curl_close($curl);
?>