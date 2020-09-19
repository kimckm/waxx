package rz.lexer;

/**
 * 类Word用于管理保留字、标识符和像&&这样的复合词法单元的词素。
 * 它也可以用来管理在中间代码中运算符的书写形式。
 * TODO 不理解。
 */
public class Word extends Token {

	public String lexeme = "";

	public Word(String lexeme, int tag) {
		super(tag);
		this.lexeme = lexeme;
	}

	@Override
	public String toString() {
		return this.lexeme;
	}

	public static final Word
		and = new Word("&&", Tag.AND),
		or = new Word("||", Tag.OR),
		eq = new Word("==", Tag.EQ),
		ne = new Word("!=", Tag.NE),
		le = new Word("<=", Tag.LE),
		ge = new Word(">=", Tag.GE),
		minus = new Word("minus", Tag.MINUS),
		True = new Word("true", Tag.TRUE),
		False = new Word("false", Tag.FALSE),
		temp = new Word("t", Tag.TEMP);

}
