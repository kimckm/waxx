package rz.inter;

import rz.lexer.*;
import rz.symbols.*;

/**
 * 表达式构造被实现为Expr的子类。类Expr包含字段op和type，分别表示了一个结点上的运算符和类型。
 */
public class Expr extends Node {

	public Token op;
	public Type type;

	Expr(Token tok, Type p) {
		op = tok;
		type = p;
	}

	public Expr gen() {
		return this;
	}

	public Expr reduce() {
		return this;
	}

	public void jumping(int t, int f) {
		emitjumps(toString(), t, f);
	}

	public void emitjumps(String test, int t, int f) {
		if (t != 0 && f != 0) {
			emit("if " + test + " goto L" + t);
			emit("goto L" + f);
		} else if (t != 0) {
			emit("if " + test + " goto L" + t);
		} else if (f != 0) {
			emit("iffalse " + test + " goto L" + f);
		} else {
			// 不生成指令
		}
	}

	public String toString() {
		return op.toString();
	}

}
