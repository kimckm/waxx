package rz;

import java.io.IOException;
import rz.lexer.Lexer;
import rz.parser.Parser;

public class CcApplication {

	public static void main(String[] args) throws IOException {
		Lexer lexer = new Lexer();
		Parser parser = new Parser(lexer);
		parser.program();
		System.out.println("\n");
	}

}
