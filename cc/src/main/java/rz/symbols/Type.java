package rz.symbols;

import rz.lexer.*;

public class Type extends Word {

    // 用于存储分配
	public int width = 0;

	public Type(String s, int tag, int width) {
		super(s, tag);
		this.width = width;
	}

	public static final Type
		Int = new Type("int", Tag.BASIC, 4),
		Float = new Type("float", Tag.BASIC, 8),
		Char = new Type("char", Tag.BASIC, 1),
		Bool = new Type("bool", Tag.BASIC, 1);

    // 函数 numeric 和 max 可用于类型转换
	public static boolean numeric(Type p) {
		return p == Type.Char || p == Type.Int || p == Type.Float;
	}

	public static Type max(Type p1, Type p2) {
		if (!numeric(p1) || !numeric(p2)) {
			return null;
		} else if (p1 == Type.Float || p2 == Type.Float) {
			return Type.Float;
		} else if (p1 == Type.Int || p2 == Type.Int) {
			return Type.Int;
		} else {
			return Type.Char;
		}
	}

}
