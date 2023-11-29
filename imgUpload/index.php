<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// $user = $_POST['name'];
echo json_encode(($_FILES));
// After successful file upload
echo json_encode([ "message" => "File uploaded successfully" ]);

echo json_encode(123123);
die();
if (!empty($_FILES["file"]["name"])) {
    // Your existing file upload handling logic
    $image    = $_FILES['file'];
    $fileName = $image["name"];
    // ... rest of your file upload logic
}
else {
    echo json_encode("No file received on the server."); // Send a response indicating no file received
}

if (!empty($_FILES["PIC_URL"]["name"])) {

    $image       = $_FILES['PIC_URL'];
    $fileName    = $image["name"];
    $fileTmpName = $image["tmp_name"];
    $fileSize    = $image["size"];
    $fileType    = $image["type"];
    $fileError   = $image["error"];
    //Check if the file is an actual image
    $validExtensions = array( "jpg", "jpeg", "png", "gif" );
    $fileExtension   = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    if (!in_array($fileExtension, $validExtensions)) {
        echo "Invalid file extension";
    }

    $imgStorePath = '/uploads';
    pathExitOrCreate($imgStorePath); // check if folder exists or create

    // Define a custom file name
    $customFileName = 'pro_' . $editId . '_' . random_strings(4) . '_' . time() . "." . $fileExtension;

    // Define the target path with the custom file name
    $targetPath_fullImgName = $imgStorePath . $customFileName;
    // image store folder path name is relative to  the image store
    if (move_uploaded_file($fileTmpName, $targetPath_fullImgName)) {

        // image final name for database store name
        $imageFinalName = str_replace('../', '', $targetPath_fullImgName);
        // Prepare and execute the query

        echo $imageFinalName;

    }
    else {
        echo "Something went wrong file uploading!";
    }

}

function random_strings($length_of_string)
{

    // String of all alphanumeric character
    $str_result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Shuffle the $str_result and returns substring
    // of specified length
    return substr(
        str_shuffle($str_result),
        0,
        $length_of_string
    );
}
function pathExitOrCreate($folderPath)
{
    if (!file_exists($folderPath)) {
        mkdir($folderPath, 0777, true);
    }
}