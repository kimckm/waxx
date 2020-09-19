package rz.lexer;

/**
 * 类Real用于处理浮点数。
 */
public class Real extends Token {

	public final float value;

	public Real(float value) {
		super(Tag.REAL);
		this.value = value;
	}

	@Override
	public String toString() {
		return "" + this.value;
	}

}
