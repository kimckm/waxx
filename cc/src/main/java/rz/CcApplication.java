package rz;

import java.io.IOException;
import rz.lexer.Lexer;

public class CcApplication {

	public static void main(String[] args) throws IOException {
		Lexer lexer = new Lexer();
		while (true) {
			lexer.scan();
			System.out.println(lexer.getWords());
		}
	}

}
