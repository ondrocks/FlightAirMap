<?php
require_once('settings.php');
require_once('class.Connection.php');

class NOTAM {

       public static function getAllNOTAM() {
                $query = "SELECT * FROM notam";
                $query_values = array();
                 try {
                        $Connection = new Connection();
                        $sth = Connection::$db->prepare($query);
                        $sth->execute($query_values);
                } catch(PDOException $e) {
                        return "error : ".$e->getMessage();
                }
                $all = $sth->fetchAll(PDO::FETCH_ASSOC);
                return $all;
        }

       public static function addNOTAM($ref,$title,$type,$fir,$code,$rules,$scope,$lower_limit,$upper_limit,$center_latitude,$center_longitude,$radius,$date_begin,$date_end,$permanent,$text,$full_notam) {
                $query = "INSERT INTO notam (ref,title,notam_type,fir,code,rules,scope,lower_limit,upper_limit,center_latitude,center_longitude,radius,date_begin,date_end,permanent,notam_text,full_notam) VALUES (:ref,:title,:type,:fir,:code,:rules,:scope,:lower_limit,:upper_limit,:center_latitude,:center_longitude,:radius,:date_begin,:date_end,:permanent,:text,:full_notam)";
                $query_values = array(':ref' => $ref,':title' => $title,':type' => $type,':fir' => $fir,':code' => $code,':rules' => $rules,':scope' => $scope,':lower_limit' => $lower_limit,':upper_limit' => $upper_limit,':center_latitude' => $center_latitude,':center_longitude' => $center_longitude,':radius' => $radius,':date_begin' => $date_begin,':date_end' => $date_end,':permanent' => $permanent,':text' => $text,':full_notam' => $full_notam);
                 try {
                        $Connection = new Connection();
                        $sth = Connection::$db->prepare($query);
                        $sth->execute($query_values);
                } catch(PDOException $e) {
                        return "error : ".$e->getMessage();
                }
        }

       public static function deleteNOTAM($id) {
                $query = "DELETE FROM notam WHERE id = :id";
                $query_values = array(':id' => $id);
                 try {
                        $Connection = new Connection();
                        $sth = Connection::$db->prepare($query);
                        $sth->execute($query_values);
                } catch(PDOException $e) {
                        return "error : ".$e->getMessage();
                }
        }
       public static function deleteAllNOTAMLocation() {
                $query = "DELETE FROM notam";
                 try {
                        $Connection = new Connection();
                        $sth = Connection::$db->prepare($query);
                        $sth->execute();
                } catch(PDOException $e) {
                        return "error : ".$e->getMessage();
                }
        }
}
?>