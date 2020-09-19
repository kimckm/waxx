package rz.lexer;

/**
 * 整数类型的词素。
 */
public class Num extends Token {

	public final int value;

	public Num(int value) {
		super(Tag.NUM);
		this.value = value;
	}

	@Override
	public String toString() {
		return "" + this.value;
	}

}
