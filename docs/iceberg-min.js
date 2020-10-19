/*
 Copyright 2017-2020 Dmitriy Gulyaev.
*/
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(f,m,t){f!=Array.prototype&&f!=Object.prototype&&(f[m]=t.value)},P="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(){ca=function(){};P.Symbol||(P.Symbol=da)}var ea=0;function da(f){return"jscomp_symbol_"+(f||"")+ea++}
function fa(){ca();var f=P.Symbol.iterator;f||(f=P.Symbol.iterator=P.Symbol("iterator"));"function"!=typeof Array.prototype[f]&&ba(Array.prototype,f,{configurable:!0,writable:!0,value:function(){return ia(this)}});fa=function(){}}function ia(f){var m=0;return ja(function(){return m<f.length?{done:!1,value:f[m++]}:{done:!0}})}function ja(f){fa();f={next:f};f[P.Symbol.iterator]=function(){return this};return f}
function ka(f,m){fa();f instanceof String&&(f+="");var t=0,E={next:function(){if(t<f.length){var W=t++;return{value:m(W,f[W]),done:!1}}E.next=function(){return{done:!0,value:void 0}};return E.next()}};E[Symbol.iterator]=function(){return E};return E}for(var R=P,X=["Array","prototype","values"],la=0;la<X.length-1;la++){var ma=X[la];ma in R||(R[ma]={});R=R[ma]}var pa=X[X.length-1],qa=R[pa],ra=qa?qa:function(){return ka(this,function(f,m){return m})};
ra!=qa&&null!=ra&&ba(R,pa,{configurable:!0,writable:!0,value:ra});
function sa(f,m,t){function E(f){f=window.atob(f);for(var m=f.length,F=new Uint8Array(m),b=0;b<m;b++)F[b]=f.charCodeAt(b);return new DataView(F.buffer)}m&&(f=E(f));var W=[null,"REF_getField","REF_getStatic","REF_putField","REF_putStatic","REF_invokeVirtual","REF_invokeStatic","REF_invokeSpecial","REF_newInvokeSpecial","REF_invokeInterface"],Y=["PUBLIC",1],ga=["PRIVATE",2],ha=["PROTECTED",4],S=["STATIC",8],v=["FINAL",16],J=["ABSTRACT",1024],G=["SYNTHETIC",4096],Z=["ENUM",16384],aa=["MANDATED",32768],
va=[Y,v,["SUPER",32],["VALUE_TYPE",256],["INTERFACE",512],J,G,["ANNOTATION",8192],Z,["MODULE",32768]],wa=[Y,ga,ha,S,v,["SYNCHRONIZED",32],["BRIDGE",64],["VARARGS",128],["NATIVE",256],J,["STRICT",2048],G],xa=[Y,ga,ha,S,v,["VOLATILE",64],["TRANSIENT",128],["FLATTENABLE",256],G,Z],ya=[v,G,aa],za=[["OPEN",32],G,aa],Aa="nop;aconst_null;iconst_m1;iconst_0;iconst_1;iconst_2;iconst_3;iconst_4;iconst_5;lconst_0;lconst_1;fconst_0;fconst_1;fconst_2;dconst_0;dconst_1;bipush;sipush;ldc;ldc_w;ldc2_w;iload;lload;fload;dload;aload;iload_0;iload_1;iload_2;iload_3;lload_0;lload_1;lload_2;lload_3;fload_0;fload_1;fload_2;fload_3;dload_0 ;dload_1 ;dload_2 ;dload_3 ;aload_0;aload_1;aload_2;aload_3;iaload;laload;faload;daload;aaload;baload;caload;saload;istore;lstore;fstore;dstore;astore;istore_0;istore_1;istore_2;istore_3;lstore_0;lstore_1;lstore_2;lstore_3;fstore_0;fstore_1;fstore_2;fstore_3;dstore_0;dstore_1;dstore_2;dstore_3;astore_0;astore_1;astore_2;astore_3;iastore;lastore;fastore;dastore;aastore;bastore;castore;sastore;pop;pop2;dup;dup_x1;dup_x2;dup2;dup2_x1;dup2_x2;swap;iadd;ladd;fadd;dadd;isub;lsub;fsub;dsub;imul;lmul;fmul;dmul;idiv;ldiv;fdiv;ddiv;irem;lrem;frem;drem;ineg;lneg;fneg;dneg;ishl;lshl;ishr;lshr;iushr;lushr;iand;land;ior;lor;ixor;lxor;iinc;i2l;i2f;i2d;l2i;l2f;l2d;f2i;f2l;f2d;d2i;d2l;d2f;i2b;i2c;i2s;lcmp;fcmpl;fcmpg;dcmpl;dcmpg;ifeq;ifne;iflt;ifge;ifgt;ifle;if_icmpeq;if_icmpne;if_icmplt;if_icmpge;if_icmpgt;if_icmple;if_acmpeq;if_acmpne;goto;jsr;ret;tableswitch;lookupswitch;ireturn;lreturn;freturn;dreturn;areturn;return;getstatic;putstatic;getfield;putfield;invokevirtual;invokespecial;invokestatic;invokeinterface;invokedynamic;new;newarray;anewarray;arraylength;athrow;checkcast;instanceof;monitorenter;monitorexit;wide;multianewarray;ifnull;ifnonnull;;;;defaultvalue;withfield;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;".split(";"),
na="                8 9 2 3 3 6 6 6 6 6                             6 6 6 6 6                                                                          7                     4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 10 11       3 3 3 3 3 3 3 5 5 3 14 3   3 3   12 13 4 4    3 3                                                   ".split(" "),Ba="Do nothing{null{int constant -1{int constant 0{int constant 1{int constant 2{int constant 3{int constant 4{int constant 5{long constant 0{long constant 1{float 0{float 1{float 2{double 0{double 1{byte, sign-extended to an int value{short, sign-extended to an int value{item from run-time constant pool{item from run-time constant pool (wide index}{long or double from run-time constant pool (wide index}{int from local variable{long from local variable{float from local variable{double from local variable{reference from local variable{int from local variable 0{int from local variable 1{int from local variable 2{int from local variable 3{long from local variable 0{long from local variable 1{long from local variable 2{long from local variable 3{float from local variable 0{float from local variable 1{float from local variable 2{float from local variable 3{double from local variable 0{double from local variable 1{double from local variable 2{double from local variable 3{reference from local variable 0{reference from local variable 1{reference from local variable 2{reference from local variable 3{int from array{long from array{float from array{double from array{reference from array{byte or boolean from array{char from array{short from array{int into local variable{long into local variable{float into local variable{double into local variable{reference into local variable{int into local variable 0{int into local variable 1{int into local variable 2{int into local variable 3{long 0 into local variable{long 1 into local variable{long 2 into local variable{long 3 into local variable{float 0 into local variable{float 1 into local variable{float 2 into local variable{float 3 into local variable{double 0 into local variable{double 1 into local variable{double 2 into local variable{double 3 into local variable{reference into local variable 0{reference into local variable 1{reference into local variable 2{reference into local variable 3{into int array{into long array{into float array{into double array{into reference array{into byte or boolean array{into char array{into short array{Pop the top operand stack value{Pop the top one or two operand stack values{Duplicate the top operand stack value{Duplicate the top operand stack value and insert two values down{Duplicate the top operand stack value and insert two or three values down{Duplicate the top one or two operand stack values{Duplicate the top one or two operand stack values and insert two or three values down{Duplicate the top one or two operand stack values and insert two, three, or four values down{Swap the top two operand stack values{Add int{Add long{Add float{Add double{Subtract int{Subtract long{Subtract float{Subtract double{Multiply int{Multiply long{Multiply float{Multiply double{Divide int{Divide long{Divide float{Divide double{Remainder int{Remainder long{Remainder float{Remainder double{Negate int{Negate long{Negate float{Negate double{Shift left int{Shift left long{Arithmetic shift right int{Arithmetic shift right long{Logical shift right int{Logical shift right long{Boolean AND int{Boolean AND long{Boolean OR int{Boolean OR long{Boolean XOR int{Boolean XOR long{Increment local variable by constant{int to long{int to float{int to double{long to int{long to float{long to double{float to int{float to long{float to double{double to int{double to long{double to float{int to byte{int to char{int to short{Compare long{Compare float (lower?}{Compare float (greater?}{Compare double{Compare double{value = 0{value \u2260 0{value < 0{value \u2264 0{value > 0{value \u2265 0{value1 = value2{value1 \u2260 value2{value1 < value2{value1 \u2265 value2{value1 > value2{value1 \u2264 value2{Branch if reference comparison succeeds: if value1 = value2{Branch if reference comparison succeeds: if value1 \u2260 value2{Branch always{Jump subroutine{Return from subroutine{Access jump table by index and jump{Access jump table by key match and jump{Return int from method{Return long from method{Return float from method{Return double from method{Return reference from method{Return void from method{Get static field from class{Set static field in class{Fetch field from object{Set field in object{Invoke instance method; dispatch based on class{Invoke instance method; special handling for superclass, private, and instance initialization method invocations{Invoke a class (static} method{Invoke interface method{Invoke dynamic method{Create new object{Create new array{Create new array of reference{Get length of array{Throw exception or error{Check whether object is of given type{Determine if object is of given type{Enter monitor for object{Exit monitor for object{Extend local variable index by additional bytes{Create new multidimensional array{Branch if reference is null{Branch if reference not null{{{{Provide a value class instance with all its instance variables set to their default value{Return an instance of a value class with an updated instance field{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{".split("{");
(function(f,E){function F(){var a=f.getUint8(H);H+=1;return a}function b(){var a=f.getUint16(H);H+=2;return a}function w(){var a=f.getUint32(H);H+=4;return a}function C(a){return e.R[a]}function t(){var a={};a.Ta=b();a.J=b();a.U=Array(a.J);for(var c=0;c<a.J;c++){var d={};d.za=b();d.value=G();a.U[c]=d}return a}function G(){var a={};a.tag=String.fromCharCode(F());switch(a.tag){case "e":var c={};c.Ua=b();c.wa=b();a.V=c;break;case "B":case "C":case "D":case "F":case "I":case "J":case "S":case "Z":case "s":a.xa=
b();break;case "@":a.qa=t();break;case "c":a.va=b();break;case "[":c={};c.ja=b();for(var d=Array(c.ja),f=0;f<c.ja;f++)d[f]=G();c.values=d;a.sa=c;break;default:alert(a.tag)}return a}function v(){var a={};a.i=b();a.A=w();var c=C(a.i).f;if("Code"==c){a.Fa=b();a.Ea=b();a.B=w();a.code=Array(a.B);for(c=0;c<a.B;c++)a.code[c]=F();a.m=b();a.X=Array(a.m);for(c=0;c<a.m;c++){var d={};d.g=b();d.C=b();d.$=b();d.N=b();a.X[c]=d}Q(a);return a}if("ConstantValue"==c)return a.ya=b(),a;if("Signature"==c)return a.Pa=b(),
a;if("EnclosingMethod"==c)return a.j=b(),a.Ga=b(),a;if("BootstrapMethods"==c){a.I=b();a.M=Array(a.I);for(c=0;c<a.I;c++){d={};d.ua=b();d.H=b();d.L=Array(d.H);for(var f=0;f<d.H;f++)d.L[f]=b();a.M[c]=d}return a}if("InnerClasses"==c){a.w=b();a.l=Array(a.w);for(c=0;c<a.w;c++)d={},d.Da=b(),d.fb=b(),d.$a=b(),d.Za=b(),a.l[c]=d;return a}if("Exceptions"==c){a.ka=b();a.W=Array(a.ka);for(c=0;c<a.ka;c++)a.W[c]=b();return a}if("LineNumberTable"==c){a.F=b();a.da=Array(a.F);for(c=0;c<a.F;c++)d={},d.g=b(),d.ca=b(),
a.da[c]=d;return a}if("LocalVariableTable"==c||"LocalVariableTypeTable"==c){a.u=b();a.s=Array(a.u);for(c=0;c<a.u;c++)d={},d.g=b(),d.length=b(),d.a=b(),d.T=b(),d.index=b(),a.s[c]=d;return a}if("SourceFile"==c)return a.Qa=b(),a;if("Module"==c){a.Ia=b();a.Ha=b();a.ha=b();a.pa=b();a.Oa=Array(a.pa);for(c=0;c<a.pa;c++)d={},d.jb=b(),d.ib=b(),d.kb=b(),a.Oa[c]=d;a.Y=b();a.Aa=Array(a.Y);for(c=0;c<a.Y;c++)d={},d.Xa=b(),d.Wa=b(),d.Ba=b(),d.Ya=K(d.Ba),a.Aa[c]=d;a.la=b();a.Ja=Array(a.la);for(c=0;c<a.la;c++)d={},
d.cb=b(),d.bb=b(),d.Ka=b(),d.eb=K(d.Ka),a.Ja[c]=d;a.Va=b();a.lb=K(a.Va);a.na=b();a.La=Array(a.na);for(c=0;c<a.na;c++)d={},d.gb=b(),d.Ma=b(),d.hb=K(d.Ma),a.La[c]=d;return a}if("Record"==c){a.P=b();a.O=Array(a.P);for(c=0;c<a.P;c++){d={};d.a=b();d.h=b();d.c=b();d.attributes=Array(d.c);for(f=0;f<d.c;f++){var e={};e.i=b();e.A=w();for(var m=0;m<e.A;m++)F();d.attributes[f]=e}a.O[c]=d}return a}if("RuntimeVisibleAnnotations"==c){a.ia=b();c=Array(a.ia);for(d=0;d<a.ia;d++)c[d]=t();a.ra=c;return a}if("NestHost"==
c)return a.Ca=b(),a;if("NestMembers"==c||"PermittedSubclasses"==c)return a.w=b(),a.l=K(a.w),a;if("MethodParameters"==c){a.ma=F();a.parameters=Array(a.ma);for(c=0;c<a.ma;c++)d={},d.a=b(),d.b=b(),a.parameters[c]=d;return a}for(c=0;c<a.A;c++)F();return a}function K(a){for(var c=Array(a),d=0;d<a;d++)c[d]=b();return c}function Q(a){a.c=b();a.attributes=Array(a.c);for(var c=0;c<a.c;c++)a.attributes[c]=v()}function S(a){for(;a.firstChild;)a.removeChild(a.firstChild)}var H=0,T=document.getElementById("outline");
m||S(T);var e={},J=w();3405691582==J&&(e.ab=J,e.ga=b(),e.fa=b(),e.S=b(),e.R=Array(e.S-1),function(){for(var a=1;a<e.S;){var c=F(),d={};d.tag=c;switch(c){case 7:case 19:case 20:d.a=b();break;case 9:case 10:case 11:d.j=b();d.v=b();break;case 8:d.Ra=b();break;case 3:case 4:d.f=w();break;case 5:case 6:d.aa=w();d.ea=w();break;case 12:d.a=b();d.h=b();break;case 1:d.length=b();for(var f="",m=-1,C=0;C<d.length;C++){var p=F();208==p||209==p?m=p:-1!=m?(f+=String.fromCharCode(((m&31)<<6)+(p&63)),m=-1):f+=String.fromCharCode(p)}d.f=
f;break;case 15:d.oa=F();d.Na=b();break;case 16:d.h=b();break;case 18:d.ta=b();d.v=b();break;default:alert("Unknown tag "+c+" at place "+a),d=null}d&&(e.R[a]=d);5!=c&&6!=c||a++;a++}}(),e.b=b(),e.K=b(),e.Sa=b(),e.o=b(),e.ba=Array(e.o),function(){for(var a=0;a<e.o;a++)e.ba[a]=b()}(),e.D=b(),e.Z=Array(e.D),function(){for(var a=0;a<e.D;a++){var c={};c.b=b();c.a=b();c.h=b();Q(c);e.Z[a]=c}}(),e.G=b(),e.methods=Array(e.G),function(){for(var a=0;a<e.G;a++){var c={};c.b=b();c.a=b();c.h=b();Q(c);e.methods[a]=
c}}(),Q(e),function(){function a(a,c,b,d){var r=k("tr"),D=k("td");D.className="ln";null!=b&&D.setAttribute("id","m-"+b+"-"+d);r.appendChild(D);for(b=0;b<c.length;b++)d=k("td"),d.innerHTML=c[b],b||(d.style.textAlign="right"),r.appendChild(d);a.appendChild(r)}function c(r,c,b){function D(a,c){return a[c+0]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3]}function f(a,c,b){b=r.attributes[b].attributes;for(var d=0;d<b.length;d++)if(b[d].s)for(var e=b[d].s,A=0;A<e.length;A++){var D=e[A];if(D.index==c)return(a?"&rarr;":
"&larr;")+" <b title='"+y(D.T)+"'>"+y(D.a)+"</b>"}return"localvar #"+c}var x;F(r);for(var A=0;A<r.c;A++){var e=C(r.attributes[A].i).f;var g="";if("Code"==e){var U=r.attributes[A];g="max_stack = <b>"+U.Fa+"</b>, max_locals = <b>"+U.Ea+"</b>";L(c,e,g,null);var q=!1;e=r.attributes[A].code;for(g=0;g<r.attributes[A].B;g++){var z=g,h=e[g];var k="";var t=Aa[h];t?(k=Ba[h],1<=h&&20>=h?k="Push "+k:21<=h&&53>=h?k="Load "+k:54<=h&&86>=h?k="Store "+k:133<=h&&147>=h?k="Convert "+k:153<=h&&164>=h&&(k="Branch if int comparison succeeds: "+
k)):(alert("opcode "+h),t=h);var n=null,u=null,v=x=null;if(na[h])switch(Number.parseInt(na[h],10)){case 3:var l=e[g+1];var p=e[g+2];n=l<<8|p;g+=2;break;case 2:n=l=e[g+1];g+=1;break;case 4:l=e[g+1];p=e[g+2];v=l<<8|p;65535<v+z&&(v-=65536);g+=2;break;case 7:l=x="?";q?(g+=2,q=!1):(x=e[g+1],l=e[g+2],127<l&&(l-=256));x=f(!1,x,A)+", "+l;g+=2;break;case 5:l=e[g+1];p=e[g+2];n=l<<8|p;g+=4;break;case 6:x=e[g+1];x=f(54<=h&&58>=h,x,A);g+=1;break;case 9:l=e[g+1];p=e[g+2];u=H(l<<8|p);g+=2;break;case 13:l=e[g+1];
p=e[g+2];n=l<<8|p;g+=3;break;case 8:l=e[g+1];u=H(127<l?l-256:l);g+=1;break;case 10:for(l=1;(g+l)%4;)l++;x=D(e,g+l);var B=D(e,g+l+4),E=D(e,g+l+8)-B+1;x="";for(var w=0;w<E;w++)p=D(e,g+l+12+4*w),x+=""+(w+B)+": go to "+(p+g)+"<br/>";g+=4*E+12+l-1;break;case 11:for(l=1;(g+l)%4;)l++;x=D(e,g+l);B=D(e,g+l+4);x="default: go to <b>"+(x+g)+"</b><br/>";for(w=0;w<B;w++)E=D(e,g+l+8+8*w),p=D(e,g+l+8+8*w+4),x+=""+E+": go to <b>"+(p+g)+"</b><br/>";g+=8*B+8+l-1;break;case 12:q=!0;break;case 14:x=d(e[g+1]),g++}59<=
h&&78>=h&&(x=f(!0,(h-59)%4,A));26<=h&&45>=h&&(x=f(!1,(h-26)%4,A));n=n?M(n):"";v&&(n="go to <b>"+(z+v)+"</b> "+(0>v?"&uarr;":"&darr;"));u&&(n=u);x&&(n=x);a(c,[z,"<span  class ='oc oc-"+(0<=h&&20>=h?"Constants":21<=h&&53>=h?"Loads":54<=h&&86>=h?"Stores":87<=h&&95>=h?"Stack":96<=h&&132>=h?"Math":133<=h&&147>=h?"Conversions":148<=h&&166>=h?"Comparisons":178<=h&&195>=h?"References":167<=h&&177>=h?"Control":196<=h&&201>=h?"Extended":"").substring(0,4).toLowerCase()+"' title='"+k+"'>"+t+"</span>","",n,""],
b,z)}for(g=0;g<r.attributes[A].c;g++){z=C(r.attributes[A].attributes[g].i).f;h="";if("LineNumberTable"==z)for(q=r.attributes[A].attributes[g],e=0;e<q.F;e++)k=q.da[e],t="m-"+b+"-"+k.g,(u=document.getElementById(t))?u.innerHTML=k.ca:alert(t),0<e&&(h+=", "),h=h+k.g+":<b>"+k.ca+"</b>";else if("LocalVariableTable"==z||"LocalVariableTypeTable"==z)if(e="LocalVariableTable"==z,k=r.attributes[A].attributes[g],0<k.u){h=h+"<table style='text-align:center;width:900px' border='1'><tr><th width='50px'>index</th><th width='60px'>start_pc</th><th width='50px'>length</th><th width='120px'>name</th><th>"+
(e?"descriptor":"signature")+"</th></tr>";for(e=0;e<k.u;e++)q=k.s[e],h=h+"<tr><td>"+q.index+"</td><td>"+q.g+"</td><td>"+q.length+"</td><td>"+G(q.a)+"</td><td style='text-align:left'>"+G(q.T)+"</td></tr>";h+="</table>"}m||""==h||L(c,z,h,null)}if(0<U.m){g="";g="<table style='text-align:center;width:900px' border='1'><tr><th width='50px'/><th width='60px'>start_pc</th><th width='50px'>end_pc</th><th width='120px'>handler_pc</th><th>catch_type</th</tr>";for(e=0;e<U.m;e++){q=U.X[e];z=0==q.N?"any":N(q.N,
!1,!0);g+="<tr><td/><td>"+q.g+"</td><td>"+q.C+"</td><td>"+q.$+"</td><td style='text-align:left'>"+z+"</td></tr>";for(z=q.g;z<=q.C;z++)(h=document.getElementById("m-"+b+"-"+z))&&h.classList.add("extry");if(z=document.getElementById("m-"+b+"-"+q.$))z.classList.add("exhandler"),z.title="Exception handler ("+q.g+"-"+q.C+")"}g+="</table>";L(c,"Exception table",g,null)}}}}function d(a){switch(a){case 4:return"T_BOOLEAN";case 5:return"T_CHAR";case 6:return"T_FLOAT";case 7:return"T_DOUBLE";case 8:return"T_BYTE";
case 9:return"T_SHORT";case 10:return"T_INT";case 11:return"T_LONG"}}function b(a){var c="";switch(a.tag){case "B":case "C":case "D":case "F":case "I":case "J":case "S":case "Z":case "s":var d=M(a.xa);"s"==a.tag&&(d="<code class='str'>\""+d+'"</code>');c+=d;break;case "@":return f(a.qa);case "c":return y(a.va);case "e":d=y(a.V.Ua);a=y(a.V.wa);c+=d+"."+a;break;case "[":c=c+"{<br/>"+p(a.sa.values,function(a){return b(a)}),c+="<br/>}"}return c}function f(a){for(var c=y(a.Ta),d="",r=0;r<a.J;r++){0<r&&
(d+=", ");var e=a.U[r],f=y(e.za),d=d+(f+"="),d=d+b(e.value)}return c+" "+d}function F(a){var c=a.attributes;a=a.c;for(var d=0;d<a;d++){var b=c[d],r=C(b.i).f,e="",k=null;switch(r){case "ConstantValue":e=M(b.ya);break;case "Signature":e=G(b.Pa);k="JVMS: A Signature attribute records a signature for a class, interface, constructor, method, or field whose declaration in the Java programming language uses type variables or parameterized types.";break;case "RuntimeVisibleAnnotations":e=p(b.ra,function(a){return f(a)});
break;case "SourceFile":e=y(b.Qa);break;case "InnerClasses":e=p(b.l,function(a){return N(a.Da,!1,!0)});k="JVMS: If the constant pool of a class or interface C contains at least one CONSTANT_Class_info entry which represents a class or interface that is not a member of a package, then there must be exactly one InnerClasses attribute in the attributes table of the ClassFile structure for C.";break;case "EnclosingMethod":e=N(b.j,!1,!0);b=b.Ga;0<b&&(e+="."+v(C(b),!0));k="JVMS: A class must have an EnclosingMethod attribute if and only if it represents a local class or an anonymous class";
break;case "BootstrapMethods":e="<ol start='0'>";for(k=0;k<b.I;k++){for(var m=b.M[k],g=M(m.ua),n="<ol>",q=0;q<m.H;q++)n+="<li>"+M(m.L[q])+"</li>";n+="</ol>";e+="<li>"+g+",<br/><b>Method arguments:</b> "+n+"</li>"}e+="</ol>";k="JVMS: The BootstrapMethods attribute records bootstrap method specifiers referenced by invokedynamic instructions.";break;case "Module":e=t(za,b.Ha);e+=" "+M(b.Ia);0<b.ha&&(e+=", module version = "+y(b.ha));break;case "Record":e=p(b.O,function(a){var b=y(a.a);a=y(a.h);return b+
": "+a});break;case "MethodParameters":e=p(b.parameters,function(a){return y(a.a)+" "+t(ya,a.b)});break;case "Code":continue;case "Exceptions":e=p(b.W,function(a){return N(a,!1,!0)});break;case "NestHost":e=N(b.Ca,!1,!0);k="JVMS: The NestHost attribute records the nest host of the nest to which the current class or interface claims to belong";break;case "PermittedSubclasses":case "NestMembers":e=p(b.l,function(a){return N(a,!1,!0)})}L(I,r,e,k)}}function p(a,b){for(var c="",d=0;d<a.length;d++){var e=
a[d];0<d&&(c+="<br/>");c+="("+(d+1)+") "+b(e)}return c}function t(a,b){for(var c="",d=0;d<a.length;d++)b&a[d][1]&&(c+="<b class='access'>ACC_"+a[d][0]+"</b> ");return c}function G(a){var b=y(a);return"<code title='CP index="+a+"' class='str'>"+b+"</code>"}function y(a){return C(a).f.replace(RegExp("<","g"),"&lt;")}function w(a){a=y(a.a);a=a.replace("<","&lt;");return a=a.replace(">","&gt;")}function v(a,b){var c=w(a),d=y(a.h);return"<span class='"+(b?"field":"method")+"' title='"+d+"'>"+c+"</span> <tt>"+
d+"</tt>"}function H(a){return"<code class='nmbr'>"+a+"</code>"}function N(a,b,c){var d="";a=y(C(a).a);var e=a=a.replace(Z,"."),f=a.lastIndexOf(";");-1!=f&&a.length-1==f&&(a=a.substring(0,f),a=a.replace(aa,"[]"),d=a.substring(0,a.indexOf("L")));f=a.lastIndexOf(".");-1!=f&&(a=a.substring(f+1));a=d+a;c&&(a+=".class");return b?a:"<span class='clzz' title='"+e+"'><code>"+a+"</code></span>"}function M(a){if(0==a)return"";var b=C(a);switch(b.tag){case 16:return"MethodType: "+y(b.h);case 15:a=W[b.oa];switch(b.oa){case 1:case 2:case 3:case 4:var c=
!0;break;case 5:case 8:c=!1;break;case 6:case 7:c=!1;break;case 9:c=!1}var d=C(b.Na);b=C(d.j);d=C(d.v);b=y(b.a)+"."+v(d,c);return"MethodHandle: "+a+", "+b;case 12:return"CONSTANT_NameAndType";case 1:return y(a);case 5:return a=(b.aa<<32)+b.ea,a>>63&&(a-=4294967295),H(a+"L");case 6:return a=(b.aa<<32)+b.ea,b=a>>52&2047,H((a>>63?-1:1)*(b?a&0xfffffffffffff|4503599627370496:(a&0xfffffffffffff)<<1)*Math.pow(2,b-1075)+"D");case 3:return H(b.f);case 4:return a=b.f,b=a>>23&255,H((a>>31?-1:1)*(b?a&8388607|
8388608:(a&8388607)<<1)*Math.pow(2,b-150)+"F");case 18:return d=C(b.v),"bootstrap method: "+b.ta+", "+v(d,!1);case 7:return N(a,!1,!0);case 19:return y(b.a);case 8:return G(b.Ra);case 11:case 10:case 9:return a=C(b.v),c="",b.j!=e.K&&(c+=N(b.j,!1,!1)+"."),c+=v(a,9==b.tag),9!=b.tag&&(c+="()"),c}}function k(a){return document.createElement(a)}function J(a,b,c,d){var e=k("tr"),f=k("td");f.className="ln";e.appendChild(f);f=k("td");f.colSpan=5;f.innerHTML="&nbsp;";e.appendChild(f);a.appendChild(e);e=k("tr");
e.style.fontWeight="bold";f=k("td");f.className="ln";e.appendChild(f);f=k("td");f.innerHTML=d&Y[1]?'<svg width="16" height="16"><circle cx="8" cy="8" r="5" stroke="green" stroke-width="1" fill="#006400"><title>public</title></circle></svg>':d&ga[1]?'<svg width="16" height="16"><rect x="2" y="2" width="10" height="10" style="fill:#8b0000;stroke-width:1;stroke:#ff0000"><title>private</title></rect></svg>':d&ha[1]?'<svg width="16" height="16"><circle cx="8" cy="8" r="5" stroke="#dddddd" stroke-width="1" fill="#ffff00"><title>protected</title></circle></svg>':
'<svg width="16" height="16"><polygon points="2,14 8,3 14,14" fill="rgb(34,104,165)" stroke="purple" stroke-width="1" /></svg>';f.style.textAlign="center";e.appendChild(f);d=k("td");d.innerHTML=c?"<a name='"+c+"'>"+b+"</a>":b;d.colSpan=4;e.appendChild(d);a.appendChild(e)}function L(a,b,c,d){var e=k("tr"),f=k("td");f.className="ln";e.appendChild(f);var f=k("td"),r="<b>";d&&(r="<b title ='"+d+"'>");f.innerHTML+=r+b+" :</b>";f.colSpan=2;f.className="attr";e.appendChild(f);e.appendChild(k("td"));b=k("td");
b.innerHTML=c;b.colSpan=2;e.appendChild(b);a.appendChild(e)}function K(a){""!=a&&L(I,"Access flags",a,null)}function Q(a,b,c){a=w(a);var d=k("li");c.appendChild(d);c=k("a");c.setAttribute("href","#"+b);c.innerHTML=a;d.appendChild(c)}var Z=RegExp("/","g"),aa=RegExp("\\[","g"),I=function(a){a=document.getElementById(a);S(a);var b=k("table");b.setAttribute("cellSpacing","0");var c=k("tbody");b.appendChild(c);a.appendChild(b);return c}(E?E:"list");var n=e.fa;var u="";49<=n&&59>=n?u="Java "+(n-44):46<=
n&&48>=n&&(u="Java 1."+(n-44));J(I,M(e.K),null,e.b);L(I,"Major version",e.fa+" ("+u+")",null);0!=e.ga&&L(I,"Minor version",e.ga,null);K(t(va,e.b));L(I,"Super class",M(e.Sa),null);if(0<e.o){n="";for(u=0;u<e.o;u++)n+=M(e.ba[u]);L(I,"Interfaces",n,null)}F(e);for(var B=0;B<e.D;B++){var V=e.Z[B];n="f"+B;J(I,v(V,!0),n,V.b);K(t(xa,V.b));F(V);if(!B){var O=k("ol");u=k("b");u.innerHTML="Fields:";m||(T.appendChild(u),T.appendChild(O))}Q(V,n,O)}for(O=0;O<e.G;O++){var B=e.methods[O];u=v(B,!1);n="m"+O;J(I,u,n,
B.b);K(t(wa,B.b));c(B,I,O);if(!O){var oa=k("ol");u=k("b");u.innerHTML="Methods:";m||(T.appendChild(u),T.appendChild(oa))}Q(B,n,oa)}document.title=N(e.K,!0,!0)+" - Iceberg - Online Java Disassembler"}())})(f,t);window.scrollTo(0,0)}window.main=sa;
if(window.FileReader){var ta=function(f){f.stopPropagation();f.preventDefault();f=("drop"==f.type?f.dataTransfer.files:f.target.files)[0];var m=new FileReader;m.onload=function(){sa(new DataView(m.result),!1,null)};m.readAsArrayBuffer(f)},ua=function(f){f.stopPropagation();f.preventDefault();f.dataTransfer.dropEffect="copy"},Ca=document.getElementById("drop_zone");Ca&&(Ca.addEventListener("dragover",ua,!1),Ca.addEventListener("drop",ta,!1),document.getElementById("files").addEventListener("change",
ta,!1))};
