/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author JUAN
 */
import Codigo_Java.Proceso_de_consulta;
import Conexion.Conexion;
//import static Codigo_Java.Proceso_de_consulta.finalconvocatorias;
import Conexion.Consultas;
import java.sql.Date;
import java.sql.SQLException;

public class NewMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws SQLException {
        // TODO code application logic here
        Proceso_de_consulta n = new Proceso_de_consulta();
n.InsertandoDatos(1);
        for (int i = 0; i <5; i++) { 
System.out.println("a "+n.ImagenPrincipal(i));
    
        }
    // Conexion s =new Conexion();
     
        //System.out.println(s.Conexion1());
        
        
      

    }
}
