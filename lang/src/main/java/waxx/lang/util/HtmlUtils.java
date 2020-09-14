package waxx.lang.util;

import java.util.regex.Pattern;

/**
 * 处理HTML文字工具类。
 */
public final class HtmlUtils {

    private HtmlUtils() {}

    /**
     * 过滤HTML标签，并返回指定长度length的字符串。
     */
    public static String pure(String html, int length) {
        Pattern htmlPattern = Pattern.compile("<[^>]+>", Pattern.CASE_INSENSITIVE);
        String pureContent = htmlPattern.matcher(html).replaceAll("");

        return pureContent.length() <= length ? pureContent : pureContent.substring(0, length);
    }

}
