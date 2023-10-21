import java.util.HashMap;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        // Diccionario
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("gato", "cat");
        diccionario.put("perro", "dog");
        diccionario.put("casa", "house");
        diccionario.put("ratón", "mouse");
        diccionario.put("pez", "fish");
        diccionario.put("tigre", "tiger");
        diccionario.put("león", "lion");
        diccionario.put("pollo", "chicken");
        diccionario.put("cow", "vaca");
        diccionario.put("hormiga", "ant");
        diccionario.put("abeja", "bee");
        diccionario.put("pulga", "flea");
        diccionario.put("polilla", "moth");
        diccionario.put("mariposa", "butterfly");
        diccionario.put("grillo", "cricket");
        diccionario.put("mosca", "fly");
        diccionario.put("piojo", "lice");
        diccionario.put("cerdo", "pig");
        diccionario.put("pato", "duck");
        diccionario.put("lobo", "wolf");


        // Solicitar una palabra en español al usuario
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese una palabra en español: ");
        // Se concierte a minúsculas para ser lenguaje fuerte
        String palabraEspanol = scanner.nextLine().toLowerCase(); 
        

        // Buscar la traducción en el diccionario
        if (diccionario.containsKey(palabraEspanol)) {
            String palabraIngles = diccionario.get(palabraEspanol);
            System.out.println("Traducción en inglés: " + palabraIngles);
        } else {
            System.out.println("La palabra no se encuentra en el diccionario.");
        }
    }
}
