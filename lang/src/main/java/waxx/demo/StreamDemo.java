package waxx.demo;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * 验证 Stream API 特性。
 */
public class StreamDemo {

    public static void main(String[] args) {
        List<String> list = Arrays.asList("1", "1");
        Set<String> set = list.stream().collect(Collectors.toSet());

        // 有排重
        System.out.println(set);
    }

}
