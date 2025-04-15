# D-Tale 配置

`dtale.show()` 函数可以接收很多参数，如果您经常使用类似的参数调用这个函数，这可能会变得相当繁琐。不用担心，有一种解决方案，就是通过 `.ini` 文件来配置。

指定 `.ini` 文件有两种方式（按优先级排序）：
1) 创建环境变量 `DTALE_CONFIG` 并将其设置为您的 `.ini` 文件路径
2) 将您的 `.ini` 文件保存到 `$HOME/.config/dtale.ini`

如果您使用 `.ini` 文件，那么 `[app]` 部分的属性将应用于整个应用程序，而 `[show]` 部分将在每次调用 `dtale.show` 时应用。

以下是一个包含所有可用属性及其默认值（如果有的话）的 `.ini` 文件示例：

```ini
[app]
theme = light
github_fork = False
hide_shutdown = False
pin_menu = False
language = en
max_column_width = 100 # 默认值为 None
main_title = My App # 仅当您不想看到 D-Tale logo 时使用
main_title_font = Arial # 此字体应用于您的自定义标题
query_engine = python
hide_header_editor = False
lock_header_menu = False
hide_header_menu = False
hide_main_menu = False
hide_column_menus = False
hide_row_expanders = False
enable_custom_filters = False
enable_web_uploads = False

[charts] # 这控制散点图和3D图表中可以包含的点数
scatter_points = 15000
3d_points = 4000

[auth]
active = True
username = johndoe
password = 1337h4xOr

[show]
host = localhost
port = 8080
debug = False
reaper_on = True
open_browser = False
ignore_duplicate = True
allow_cell_edits = True
inplace = False
drop_index = False
app_root = additional_path
precision = 6 # 浮点数显示的小数位数
show_columns = a,b
hide_columns = c
column_formats = {"a": {"fmt": {"html": true}}}
sort = a|ASC,b|DESC
locked = a,b
column_edit_options = {"a": ["yes", "no", "maybe"]}
auto_hide_empty_columns = False
```

关于这些属性的说明：
* *theme:* 可用值为 'light' 和 'dark'
* *host/port/app_root:* 没有默认值

以下是参数传递给 `dtale.show` 的优先级顺序（从最重要到最不重要）：
1) 直接在 `dtale.show` 中传递参数，或向 `dtale.global_state.set_app_settings` 或 `dtale.global_state.set_auth_settings` 传递设置字典
2) 调用 `dtale.config.set_config(path_to_file)`，这在您有长时间运行的进程（如 jupyter notebook）时可能很有用
3) 通过 `DTALE_CONFIG` 环境变量指定 `.ini` 文件
4) 在 `$HOME/.config/dtale.ini` 中指定 `.ini` 文件
