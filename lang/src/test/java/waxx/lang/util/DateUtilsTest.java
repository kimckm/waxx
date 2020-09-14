package waxx.lang.util;

import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class DateUtilsTest {

    @Test
    public void generateDateByMonth() {
        List<String> list = DateUtils.generateDateByMonth(2020, 8);
        assertEquals(31, list.size());
    }

}
