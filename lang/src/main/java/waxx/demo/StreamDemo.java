package waxx.demo;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 验证 Stream API 特性。
 */
public class StreamDemo {

    public static void main(String[] args) {
        List<String> list = Arrays.asList("1", "1");
        Set<String> set = new HashSet<>(list);

        // 有排重
        System.out.println(set);
    }

}
