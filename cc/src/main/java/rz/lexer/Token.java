package rz.lexer;

/**
 * 词素对象。
 */
public class Token {

	public final int tag;

	public Token(int tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "" + this.tag;
	}

}
