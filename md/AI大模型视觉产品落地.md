﻿### AI大模型视觉产品落地

---

用达人照片生成虚拟人LoRA资产, 以图生图, 文生图, 模板生图的方式生成多个写真子产品定期发送给用户/达人.

*此场景下的LoRA: 少量照片训练出来的面容模型, 注入到SD中对SD模型进行微调让照片的脸具有达人的特征*

---

1. 图生图/文生图 - **付费图包**
  
    达人朋友圈写真AIGC, 达人上传种子图片或输入风格文本, 后端按照此风格生成达人的照片, 达人审核后发送到朋友圈展示给用户

1. 模板生图 - **私定图集**&成品写真&拍同款

   模板知识库构建.

   用户在虚拟人聊天界面购买, 输入着装要求, 后端根据着装要求通过大模型`RAG`去模板库找到匹配的模板进行图生图.

   用模板生图是为了尺度可控.

1. StableDiffusion部署, Ollama+deepseek部署

---

                                                       