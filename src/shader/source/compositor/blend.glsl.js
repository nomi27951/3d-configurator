export default "@export clay.compositor.blend\n#define SHADER_NAME blend\n#ifdef TEXTURE1_ENABLED\nuniform sampler2D texture1;\nuniform float weight1 : 1.0;\n#endif\n#ifdef TEXTURE2_ENABLED\nuniform sampler2D texture2;\nuniform float weight2 : 1.0;\n#endif\n#ifdef TEXTURE3_ENABLED\nuniform sampler2D texture3;\nuniform float weight3 : 1.0;\n#endif\n#ifdef TEXTURE4_ENABLED\nuniform sampler2D texture4;\nuniform float weight4 : 1.0;\n#endif\n#ifdef TEXTURE5_ENABLED\nuniform sampler2D texture5;\nuniform float weight5 : 1.0;\n#endif\n#ifdef TEXTURE6_ENABLED\nuniform sampler2D texture6;\nuniform float weight6 : 1.0;\n#endif\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = vec4(0.0);\n#ifdef TEXTURE1_ENABLED\n tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;\n#endif\n#ifdef TEXTURE2_ENABLED\n tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;\n#endif\n#ifdef TEXTURE3_ENABLED\n tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;\n#endif\n#ifdef TEXTURE4_ENABLED\n tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;\n#endif\n#ifdef TEXTURE5_ENABLED\n tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;\n#endif\n#ifdef TEXTURE6_ENABLED\n tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;\n#endif\n gl_FragColor = encodeHDR(tex);\n}\n@end";
