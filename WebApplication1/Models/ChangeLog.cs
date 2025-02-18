namespace TargetsMasterAPI.Models
{
    public class ChangeLog
    {
        public int Id { get; set; }
        public int TargetId { get; set; }
        public string FieldName { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }
        public DateTime ChangeTime { get; set; }
    }
}
