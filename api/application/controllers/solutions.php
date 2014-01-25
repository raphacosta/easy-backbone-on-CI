<?php
/*
* @author: Hashtag Consulting
* @description: Restful socket to receive/send data from the JAVA API being used on this application
* @date: 2014-01-25
*/
include(APPPATH.'/libraries/REST_Controller.php');

class Solutions extends REST_Controller
{

  /*
  * @description: index_get() - initial listing display all the solutions available on the Restful point.
  */
  function index_get() {
    /*
    * @description: consumes JSON from API and load the decoded content on data variable
    * 							base_API_path can be found at the config file
    */
    $data = json_decode(file_get_contents($this->config->item('base_API_Path').'slug/solutions/'));
    /*
    * @description: encodes JSON and send it back with the 200 code (success)
    */
    json_encode($this->response($data, 200));
  }
}
?>
