package ut.tc.jira.theme;

import org.junit.Test;
import tc.jira.theme.api.MyPluginComponent;
import tc.jira.theme.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}