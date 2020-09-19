package rz.parser;

import rz.lexer.Lexer;

public class Parser {

	private Lexer lexer;

	public Parser(Lexer lexer) {
		this.lexer = lexer;
	}

	public void program() {
		System.out.println("program");
	}

}
