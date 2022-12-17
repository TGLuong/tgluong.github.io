import Head from "next/head"
import styles from 'styles/scss/articles/page.module.scss'
import { Code } from "components/common"

const interface_code = 
`"<node>"
    "<interface name='com.gialuong.TestInterface'>"
        "<method name='Area'>"
            "<arg type='u' name='width' direction='in'/>"
            "<arg type='u' name='height' direction='in'/>"
            "<arg type='u' name='area' direction='out'/>"
        "</method>"
    "</interface>"
"</node>"`

const binding_code = 
`#include <stdint.h>
#include <gio/gio.h>

#include <iostream>
#include <memory>
#include <string>

class TestInterface {
public:
    static std::unique_ptr<TestInterface> CreateOne() {
        TestInterface *new_object = new TestInterface;
        new_object->proxy = g_dbus_proxy_new_for_bus_sync(G_BUS_TYPE_SESSION, G_DBUS_PROXY_FLAGS_NONE,
                                                          NULL, "com.gialuong.TestServer", "/",
                                                          "com.gialuong.TestInterface", NULL, NULL);
        if (new_object->proxy == nullptr)
            return nullptr;

        return std::unique_ptr<TestInterface>(new_object);
    }

    ~TestInterface() {
        g_object_unref(proxy);
    }

    uint32_t Area(uint32_t width, uint32_t height) {
        GVariant *response_message = g_dbus_proxy_call_sync(proxy, "Area", g_variant_new("(uu)", width, height), 
                                                            G_DBUS_CALL_FLAGS_NONE, -1, NULL, NULL);
        uint32_t response_data;
        g_variant_get(response_message, "(u)", &response_data);

        g_variant_unref(response_message);
        return response_data;
    }
private:
    GDBusProxy *proxy;
    
    TestInterface() {

    }
};

int main()
{
    auto object = TestInterface::CreateOne();
    if (object == nullptr) {
        std::cout << "Create object error" << std::endl;
        return -1;
    }

    std::cout << "Area: " << object->Area(25, 25) << std::endl;

    return 0;
}`

const run_result = 
`Area: 625`

const BindingInterfaceIntoObject = () => {
  return (
    <>
     <Head>
      <title>Biding DBus interface into C++ Object</title>
      <meta>Biding DBus interface into C++ Object</meta>
     </Head>
     <div className={styles.root}>
      <h1>Binding DBus interface into C++ objcet</h1>
      <p>DBus Interface has one method is <p className={styles.quote}>Area</p></p>
      <Code lang="xml">{interface_code}</Code>
      <p>Now I am binding this interface into C++ class and create one instance calling Area method</p>
      <Code lang="cpp">{binding_code}</Code>
      <h2>Run result</h2>
      <Code lang="bash">{run_result}</Code>
     </div>
    </>
  )
}

export default BindingInterfaceIntoObject