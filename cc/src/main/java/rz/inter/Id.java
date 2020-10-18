package rz.inter;

import lexer.*;
import symbols.*;

/**
 * 标识符
 */
public class Id extends Expr {

	public int offset; // 相对地址

	public Id(Word id, Type type, int offset) {
		super(id, type);
		this.offset = offset;
	}

}
