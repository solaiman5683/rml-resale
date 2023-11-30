<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, sis_id, user_id,name,email,address,district_id,upazila_id");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    require_once('db_conn_resale.php');
    $all_headers = getallheaders();
	
	@$v_security_id = $all_headers['sis_id'];
	@$v_user_id = $all_headers['user_id'];
	@$v_name = $all_headers['name'];
	@$v_email = $all_headers['email'];
	@$v_address = $all_headers['address'];
	@$v_district_id = $all_headers['district_id'];
	@$v_upazila_id = $all_headers['upazila_id'];
	
	
	
	
	// Profile Information
	$is_found=0;
	$user_information = array();
	$LOGIN_SQL  = oci_parse($objConnect, "UPDATE USER_PROFILE
										SET    USER_NAME    ='$v_name',
										       ADDRESS      = '$v_address',
											   EMAIL        = '$v_email',
											   DISTRICT_ID  = '$v_district_id',
											   UPAZILA_ID   = '$v_upazila_id'
										 WHERE  ID          = $v_user_id
										");
    if (@oci_execute($LOGIN_SQL)) {
		$is_found=1; 
    } 
	// End Profile Information
	
	
	
	
	
	
	
	/*
	// User Bid List Information
	$bid_information = array();
	$BID_SQL  = oci_parse($objConnect, "SELECT 
	            (SELECT TITLE FROM BRAND WHERE ID=B.BRAND_ID) BRAND_NAME,
			    B.CATEGORY,B.MODEL,
			    B.REF_CODE,
			    B.ENG_NO,
			    B.CHS_NO,
			    B.REG_NO,B.DISPLAY_PRICE,
			    A.BID_AMOUNT,A.BOOKED_STATUS,A.ENTRY_DATE BID_ENTRY_DATE
			FROM PRODUCT_BID A, PRODUCT B
			WHERE A.PRODUCT_ID=B.ID
			AND A.USER_ID=$v_user_id");
    if (@oci_execute($BID_SQL)) {
		while ($row = oci_fetch_assoc($BID_SQL)) {
            $bid_information[] = array(
				"BRAND_NAME" => $row['BRAND_NAME'],
				"CATEGORY" =>$row['CATEGORY'],
				"MODEL" => $row['MODEL'],
				"REF_CODE" => $row['REF_CODE'],
				"ENG_NO" => $row['ENG_NO'],
				"CHS_NO" => $row['CHS_NO'],
				"REG_NO" => $row['REG_NO'],
				"DISPLAY_PRICE" => $row['DISPLAY_PRICE']
            );
        } 
    } 
	// End User Bid List Information
	
	
	*/
	
	
	if($is_found==1){
		  $json = array("status" => "true", 
					  "message" => "Information Updated",
					  );
	}else {
        $json = array("status" => "false", 
		              "message" => "Error executing SQL query"
		              );
    }

    oci_close($objConnect);
} else {
    $json = array("status" => "false", "message" => "Request method not accepted");
}

echo json_encode($json);
?>
