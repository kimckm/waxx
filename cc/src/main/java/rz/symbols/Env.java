package rz.symbols;

import java.util.Hashtable;
import rz.lexer.Token;

/**
 * Env类把字符串词法单元映射为类Id的对象。
 */
public class Env {

	private Hashtable table;

	protected Env prev;

	public Env(Env prev) {
		this.table = new Hashtable();
		this.prev = prev;
	}

	public Id get(Token token) {
		for (Env e = this; e != null; e = e.prev) {
			Id found = (Id) e.table.get(token);
			if (found != null) {
				return found;
			}
		}
		return null;
	}

}
