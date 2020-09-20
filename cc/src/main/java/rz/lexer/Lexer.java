package rz.lexer;

import java.io.IOException;
import java.util.Hashtable;

/**
 * 词法分析程序。
 */
public class Lexer {

	public static int line = 1;
	private char peek = ' ';
	private Hashtable<String, Word> words = new Hashtable<>();

	private void readch() throws IOException {
		peek = (char) System.in.read();
	}

	private boolean readch(char c) throws IOException {
		readch();
		if (peek != c) {
			return false;
		}

		peek = ' ';
		return true;
	}

	/**
	 * 扫描
	 */
	public Token scan() throws IOException {
		for (;;readch()) {
			if (peek == ' ' || peek == '\t') {
				continue;
			} else if (peek == '\n') {
				line = line + 1;
			} else {
				break;
			}
		}

		switch (peek) {
			case '&':
				if (readch('&')) {
					return Word.and;
				} else {
					return new Token('&');
				}
			case '|':
				if (readch('|')) {
					return Word.or;
				} else {
					return new Token('|');
				}
				// TODO 扩展
		}

		if (Character.isDigit(peek)) {
			int v = 0;
			do {
				v = 10 * v + Character.digit(peek, 10);
				readch();
			} while (Character.isDigit(peek));

			if (peek != '.') {
				return new Num(v);
			}

			float x = v;
			float d = 10;

			for (;;) {
				readch();
				if (!Character.isDigit(peek)) {
					break;
				}
				x = x + Character.digit(peek, 10) / d;
				d = d + 10;
			}

			return new Real(x);
		}

		if (Character.isLetter(peek)) {
			StringBuilder b = new StringBuilder();

			do {
				b.append(peek);
				readch();
			} while (Character.isLetterOrDigit(peek));

			String s = b.toString();
			Word w = words.get(s);

			if (w != null) {
				return w;
			}

			w = new Word(s, Tag.ID);
			words.put(s, w);

			return w;
		}

		Token t = new Token(peek);
		peek = ' ';

		return t;
	}

	public Hashtable<String, Word> getWords() {
		return words;
	}
}
