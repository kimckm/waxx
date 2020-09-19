package rz.inter;

import rz.lexer.*;

/**
 * 抽象语法树中的结点被实现为类Node的对象。为了报告错误，字段lexline保存了本结点对应的构造
 * 在源程序中的行号。
 */
public class Node {

	int lexline = 0;

	Node() {
		lexline = Lexer.line;
	}

	void error(String s) {
		throw new Error("near line " + lexline + ": " + s);
	}

	static int labels = 0;

	public int newlabels() {
		return ++labels;
	}

	public void emitlabel(int i) {
		System.out.print("L" + i + ":");
	}

	public void emit(String s) {
		System.out.print("\t" + s);
	}

}
