# 插件配置Web SkillSystem2

---

小冰对话插件的配置支持, 插件可以针对不同的第三方进行定制化, 所以一个插件会有多个配置文件, SkillSystem2解决旧版SkillSystem几个痛点

1. 配置项没有类型约束, 业务人员配置错了只有运行时才能发现.

1. 插件开发者增删了配置项, 需要一个一个的去修改对应的配置文件, 经常导致遗漏

1. 配置项只有第一级能加注释, 导致业务人员对嵌套配置只能考key猜测功能, 尤其开发人员离职后这块信息只能从代码还原.

1. SkillSystem2提出Schema/Config概念, 一个Schema对应多个Config, Schema是一个/多个C#的类, 类属性是配置项, 可以通过给属性加特性(Range, Required, RegularExpression..)来对字段进行校验/添加描述性文本. 

1. 插件开发者通过写Schema或者通过Json/Yaml自动生成Schema.

1. SkillSystem2会动态编译C#类(Schema), 然后根据注解校验属性. 保证业务人员不会将校验失败的发布到线上.

1. SkillSystem2支持开发人员修改Schema来自动更新所有Config.

<a target='_blank' href='?p=images&names=skill-system.0.png@列表,skill-system.2.png@Schema编辑器,skill-system.1.png@通过UI配置,skill-system.3.png@直接编辑Json,skill-system.4.png@修改Diff'>
查看示例
</a>