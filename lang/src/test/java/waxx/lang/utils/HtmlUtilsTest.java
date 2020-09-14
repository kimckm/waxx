package waxx.lang.utils;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HtmlUtilsTest {

    @Test
    public void pure() {
        String html = "<h1>rz</h1>";
        String pure = HtmlUtils.pure(html, 1);

        assertEquals("r", pure);
    }

}
