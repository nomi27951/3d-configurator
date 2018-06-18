export default "@export clay.compositor.downsample\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nfloat brightness(vec3 c)\n{\n return max(max(c.r, c.g), c.b);\n}\n@import clay.util.clamp_sample\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n#ifdef ANTI_FLICKER\n vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;\n vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;\n vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;\n vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;\n float s1w = 1.0 / (brightness(s1) + 1.0);\n float s2w = 1.0 / (brightness(s2) + 1.0);\n float s3w = 1.0 / (brightness(s3) + 1.0);\n float s4w = 1.0 / (brightness(s4) + 1.0);\n float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);\n vec4 color = vec4(\n (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,\n 1.0\n );\n#else\n vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));\n color *= 0.25;\n#endif\n gl_FragColor = encodeHDR(color);\n}\n@end";
