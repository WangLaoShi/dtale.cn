import pandas as pd
import dtale
import dtale.global_state

# 创建一个示例数据框
df = pd.DataFrame({
    '列1': [1, 2, 3, 4, 5],
    '列2': ['a', 'b', 'c', 'd', 'e']
})

dtale.global_state.set_app_settings(
    {
        'pin_menu': True,
        'hide_header_menu': True,
        'hide_ribbon': True,
        'hide_ribbon_menu': True,
        'github_form': False,
        'language': 'cn',
        'main_title': 'DTale.cn',
        'ribbon_menu': False,
        'host': '127.0.0.1',
        'port': 8080,
        'open_browser': True,
        'enable_custom_filters': True,
    }
)

# 启动 D-Tale 服务
d = dtale.show(df)
print('D-Tale 已启动，请访问:', d._url)

# 保持服务运行
input('按回车键退出...') 