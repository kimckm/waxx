package waxx.lang.util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * 日期工具类
 */
public final class DateUtils {

    private static final String DEFAULT_PATTERN = "yyyy-MM-dd";
    public static final String WEEK = "week";

    private DateUtils() {}

    /**
     * 计算目标时间与当前时间的时间差。
     */
    public static long fromNow(Calendar when, String field) {
        long whenTime = when.getTime().getTime();
        long nowTime = Calendar.getInstance().getTime().getTime();
        long diff = nowTime - whenTime;

        long oneDay = 1000 * 60 * 60 * 24;
        if (WEEK.equals(field)) { // 计算周数
            return  diff / (oneDay * 7);
        } else { // 计算天数
            return diff / oneDay;
        }
    }

    /**
     * 生成1个月份的日期字符串集合
     */
    public static List<String> generateDateByMonth(int year, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, month - 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);

        SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_PATTERN);
        List<String> dateList = new ArrayList<>();

        int currentMonth = calendar.get(Calendar.MONTH);
        while (currentMonth == calendar.get(Calendar.MONTH)) {
            dateList.add(sdf.format(calendar.getTime()));
            calendar.add(Calendar.DAY_OF_MONTH, 1);
        }

        return dateList;
    }

}
