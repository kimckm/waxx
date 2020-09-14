package waxx.lang.util;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HtmlUtilsTest {

    @Test
    public void pure() {
        String html = "<h1>waxx</h1>";
        String pure = HtmlUtils.pure(html, 1);

        assertEquals("w", pure);
    }

}
