import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class JuegoDiccionario {
    public static void main(String[] args) {
        // Diccionario
        Map<String, String> diccionario = new HashMap<>();
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

        // Elegir al azar 5 palabras en español
        String[] palabrasEspanol = diccionario.keySet().toArray(new String[0]);
        Random random = new Random();
        String[] palabrasElegidas = new String[5];
        for (int i = 0; i < 5; i++) {
            int indice = random.nextInt(palabrasEspanol.length);
            palabrasElegidas[i] = palabrasEspanol[indice];
        }

        // Solicitar traducción al usuario y verificar respuestas
        Scanner scanner = new Scanner(System.in);
        int respuestasCorrectas = 0;
        int respuestasIncorrectas = 0;

        System.out.println("¡Traduce correctamente de Español al Inglés!");
        for (String palabraEspanol : palabrasElegidas) {
            System.out.print("Traduzca '" + palabraEspanol + "' al inglés: ");
            String respuestaUsuario = scanner.nextLine().toLowerCase(); // Convertir a minúsculas

            if (diccionario.containsKey(palabraEspanol)) {
                String traduccionCorrecta = diccionario.get(palabraEspanol);
                if (respuestaUsuario.equals(traduccionCorrecta)) {
                    System.out.println("¡Correcto!");
                    respuestasCorrectas++;
                } else {
                    System.out.println("Incorrecto. La traducción correcta es: " + traduccionCorrecta);
                    respuestasIncorrectas++;
                }
            }
        }

        // Mostrar resultados
        System.out.println("Juego terminado. Respuestas correctas: " + respuestasCorrectas);
        System.out.println("Respuestas incorrectas: " + respuestasIncorrectas);
    }
}
