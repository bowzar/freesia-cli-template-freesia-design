import React from 'react';
import { Typography, Image } from 'antd';
import { resource, DocumentContainer, Title } from "@yulintu/freesia-design";

const { Paragraph, Text, Link } = Typography;

const Intro = function (props) {

    return <>
        <DocumentContainer>
            <Typography>
                <Title id="介绍">介绍</Title>
                <Image className="noshadow" src={resource("/images/docs/intro.png")}></Image>
                <Text type="secondary">图片来自 Ant Design 官网</Text>
                <Paragraph>
                    这是一个基于鱼鳞图 Freesia Design 前端框架的工程项目。
                </Paragraph>
            </Typography>
            <Typography>
                <Title id="进阶" level={2}>进阶</Title>
                <Paragraph>
                    可以通过以下链接，进一步了解 Freesia Design：
                </Paragraph>
                <Paragraph>
                    <ul>
                        <li>
                            文档：<Link href="http://freedesign-dev.yulintu.com">http://freedesign-dev.yulintu.com</Link>
                        </li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    <blockquote>
                        <Paragraph>
                            在开始之前，推荐先学习 <Link href="https://reactjs.org/">React</Link> 和 <Link href="https://www.babeljs.cn/docs/learn.html">ES2015</Link>，并正确安装和配置了 <Link href="https://nodejs.org/en/">Node</Link>.js v14.15 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将本框架作为你的第一步可能不是最好的主意。
                        </Paragraph>
                    </blockquote>
                </Paragraph>
            </Typography>
        </DocumentContainer>
    </>
}

export default Intro;